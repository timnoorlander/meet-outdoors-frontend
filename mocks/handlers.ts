import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("/create-activity", () => {
    return HttpResponse.json({ id: "94a3a0de-8c99-11ee-b9d1-0242ac120002" });
  }),

  http.get("/activities", () => {
    return HttpResponse.json([
      {
        id: "8581d855-1b90-45a2-b507-3f4ef2048350",
        title: "Watching birds during migration",
        category: "Birding",
        description: "",
        position: [55.612666, 12.512721],
        startTime: "2023-10-01T08:00:00Z",
        endTime: "2023-10-01T12:00:00Z",
      },
      {
        id: "7f49f402-fde2-4fe0-b772-558c0f61c7b1",
        title: "Gravel bike ride around the lakes",
        category: "Cycling",
        description: "",
        position: [55.712615, 12.535069],
        startTime: "2022-03-05T09:15:00Z",
        endTime: "2023-10-01T12:00:00Z",
      },
    ]);
  }),
];
