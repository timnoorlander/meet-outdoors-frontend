import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

const worker = setupWorker(...handlers);

export function enableMocking() {
  return worker.start({
    onUnhandledRequest(request, print) {
      // Ignore any requests containing "openstreetmap.org" or "node_modules" in their URL.
      if (
        request.url.includes("basemaps.cartocdn.com") ||
        request.url.includes("node_modules")
      ) {
        return;
      }

      // Otherwise, print an unhandled request warning.
      print.warning();
    },
  });
}
