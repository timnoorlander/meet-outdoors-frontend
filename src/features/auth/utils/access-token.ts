import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";

const STORAGE_KEY = "access_token";

type AccessTokenPayload = {
  exp: number;
  iat: number;
};

export function isAccessTokenValid(accessToken: string) {
  try {
    const decodedToken = jwtDecode<AccessTokenPayload>(accessToken);
    const expirationTime = decodedToken.exp * 1000;

    const isValid = dayjs().isBefore(expirationTime);
    return isValid;
  } catch (error) {
    return false;
  }
}

export function setLocalAccessToken(accessToken: string): void {
  localStorage.setItem(STORAGE_KEY, accessToken);
}

export function getLocalAccessToken(): string | null {
  return localStorage.getItem(STORAGE_KEY);
}

export function removeLocalAccessToken(): void {
  localStorage.setItem(STORAGE_KEY, "");
}
