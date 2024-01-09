const STORAGE_KEY = "access_token";

export function setAccessToken(accessToken: string): void {
  localStorage.setItem(STORAGE_KEY, accessToken);
}

export function getAccessToken(): string | null {
  return localStorage.getItem(STORAGE_KEY);
}

export function removeAccessToken(): void {
  localStorage.setItem(STORAGE_KEY, "");
}
