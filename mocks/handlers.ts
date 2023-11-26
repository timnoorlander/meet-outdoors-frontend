import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("/create-activity", () => {
    return HttpResponse.json({ name: "John Maverick" });
  }),
];
