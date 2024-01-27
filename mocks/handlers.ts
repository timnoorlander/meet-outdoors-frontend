import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("http://localhost:3000/create-activity", () => {
    return HttpResponse.json({ id: "94a3a0de-8c99-11ee-b9d1-0242ac120002" });
  }),

  http.post("http://localhost:3000/auth/login", () => {
    return HttpResponse.json({
      access_token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MDYzNzA4MTIsImV4cCI6MTczNzkwNjgwOCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.ztRUfHIkFXphn6t_IaSnvV7ZYwxoR0WKkg5mTJ7BgfA",
    });
  }),

  http.get("http://localhost:3000/activities", () => {
    return HttpResponse.json([
      {
        id: "98c79a0a-2aa4-4c9b-9022-9c5a476b6f44",
        title: "Gravel bike ride around the lakes",
        category: "Cycling",
        description:
          "Hey all, join me for a nice ride around the lakes. All levels are welcome",
        startTime: "2023-10-01T08:00:00Z",
        address: "",
        position: { lng: "12.512721", lat: "55.612666" },
        city: "Dragør",
        postcode: "2791",
        country: "Denmark",
      },
      {
        id: "0f963a18-2a2f-4374-80bf-9e8ec7c18b6d",
        title: "Hiking Adventure in Dyrehaven Forest",
        category: "Hiking",
        description:
          "Hello everyone! Let's embark on a refreshing hiking journey through the scenic Dyrehaven Forest. All skill levels are encouraged to join!",
        startTime: "2023-11-15T09:30:00Z",
        address: "",
        position: { lng: "12.570132", lat: "55.770312" },
        city: "Klampenborg",
        postcode: "2930",
        country: "Denmark",
      },
      {
        id: "546f0e2d-2281-4bc0-b6a3-5a74d287d89d",
        title: "Sunset Kayaking on Øresund",
        category: "Kayaking",
        description:
          "Join me for a peaceful evening of kayaking along the beautiful Øresund coastline. All paddlers welcome!",
        startTime: "2023-08-15T18:00:00Z",
        address: "",
        position: { lng: "12.579669", lat: "55.703086" },
        city: "Helsingør",
        postcode: "3000",
        country: "Denmark",
      },
      {
        id: "9a89362e-3ba5-4659-97d8-e1e0e70c9bf4",
        title: "Trail Running in Møns Klint",
        category: "Running",
        description:
          "Calling all trail runners! Let's explore the challenging trails of Møns Klint. Expect breathtaking views and a great workout!",
        startTime: "2023-09-20T10:00:00Z",
        address: "",
        position: { lng: "12.667625", lat: "54.985388" },
        city: "Borre",
        postcode: "4791",
        country: "Denmark",
      },
      {
        id: "da9f0029-2cf9-409d-9810-54e1841a2f20",
        title: "Copenhagen Beach Cleanup Day",
        category: "Environmental",
        description:
          "Help make a difference! Join us for a beach cleanup day in Copenhagen. Every hand counts!",
        startTime: "2023-10-05T13:30:00Z",
        address: "",
        position: { lng: "12.593301", lat: "55.689013" },
        city: "Copenhagen",
        postcode: "1000",
        country: "Denmark",
      },
      {
        id: "b2e50a71-8d46-4c38-bb53-0a6c8a4c95b1",
        title: "Photography Walk in Nyhavn",
        category: "Photography",
        description:
          "Photography enthusiasts, let's capture the charm of Nyhavn together. All camera types welcome!",
        startTime: "2023-11-10T15:45:00Z",
        address: "",
        position: { lng: "12.594284", lat: "55.677929" },
        city: "Copenhagen",
        postcode: "1051",
        country: "Denmark",
      },
      {
        id: "e7af9f67-1299-4c48-a204-b41c7e7f89de",
        title: "Yoga by the Lakes",
        category: "Yoga",
        description:
          "Relax and rejuvenate with a soothing yoga session by the lakes of Copenhagen. All levels are invited!",
        startTime: "2024-01-10T17:30:00Z",
        address: "",
        position: { lng: "12.571197", lat: "55.686585" },
        city: "Copenhagen",
        postcode: "1125",
        country: "Denmark",
      },
      {
        id: "0a7a24a1-8eae-4909-a7e5-5093b2fe9062",
        title: "Mountain Biking in Rude Skov",
        category: "Mountain Biking",
        description:
          "Attention thrill-seekers! Join us for an exhilarating mountain biking experience in Rude Skov.",
        startTime: "2024-02-25T11:00:00Z",
        address: "",
        position: { lng: "12.554887", lat: "55.834716" },
        city: "Hørsholm",
        postcode: "2970",
        country: "Denmark",
      },
      {
        id: "3ee7c16d-6765-41c5-a14e-7d3ee06e11fe",
        title: "Bird Watching at Furesø",
        category: "Bird watching",
        description:
          "Calling all bird enthusiasts! Let's gather for a peaceful day of bird watching at the scenic Furesø.",
        startTime: "2024-04-03T08:45:00Z",
        address: "",
        position: { lng: "12.460475", lat: "55.843876" },
        city: "Farum",
        postcode: "3520",
        country: "Denmark",
      },
      {
        id: "a7a7fe45-99ac-4a20-88c4-b76da1f6aa1f",
        title: "Climbing Adventure in Klampenborg",
        category: "Climbing",
        description:
          "Gear up for a thrilling climbing adventure in Klampenborg. All skill levels are welcome!",
        startTime: "2024-05-20T14:15:00Z",
        address: "",
        position: { lng: "12.570123", lat: "55.772721" },
        city: "Klampenborg",
        postcode: "2930",
        country: "Denmark",
      },
    ]);
  }),
];
