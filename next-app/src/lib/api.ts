"use client";
import { DirectusUser } from "models";

type Method = "GET" | "POST";

// We load the access token when we open the page
// the refresh token should be available in the cookies
// while the user has an active session
//
let accessTokenCache: string | "unauthenticated" | undefined;
async function getAccessToken(): Promise<string | "unauthenticated"> {
  if (accessTokenCache) {
    return accessTokenCache;
  }

  const response = await fetch("/api/auth/refresh", {
    method: "POST",
  });
  const result = await response.json();
  const token = result?.data?.access_token || "unauthenticated";
  accessTokenCache = token;
  if (!response.ok) {
    console.debug("unauthenticated", result);
  }
  return token;
}

export async function login(email: string, password: string) {
  const loginResponse = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      mode: "cookie",
    }),
  });
  if (loginResponse.ok) {
    window.location.reload();
    return;
  }
  throw await loginResponse.json();
}

async function request(
  method: Method,
  path: string,
  auth: boolean,
  body?: unknown,
) {
  const options = {
    method,
    headers: <Record<string, string>>{},
    body: <any>undefined,
  };
  if (body) {
    options.headers["content-type"] = "application/json";
    options.body = JSON.stringify(body);
  }
  if (auth) {
    const token = await getAccessToken();
    if (token !== "unauthenticated") {
      options.headers["authorization"] = `Bearer ${await getAccessToken()}`;
    }
  }
  const response = await fetch(`/api${path}`, options);
  if (response.status === 204) {
    return undefined;
  }
  const jsonBody = await response.json();
  if (response.ok) {
    return jsonBody;
  }
  throw jsonBody;
}

export async function getCurrentUser(): Promise<DirectusUser> {
  return await request("GET", "/users/me", true);
}

export async function signDocument(file: File, context: string) {}

export async function validateDocument(file: File) {}

export async function logout(): Promise<void> {
  await request("POST", "/auth/logout", false, {});
  window.location.reload();
}
