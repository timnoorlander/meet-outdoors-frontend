import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("/create-activity", () => {
    return HttpResponse.json({ id: "94a3a0de-8c99-11ee-b9d1-0242ac120002" });
  }),
];
