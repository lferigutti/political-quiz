import { API_URL } from "../config";

export async function request<T>(
  endpoint: string,
  method: "GET" | "POST" | "DELETE" = "GET",
  body: object | null = null,
  headers: HeadersInit = {}
): Promise<T | null> {

  const requestBody = body ? JSON.stringify(body) : undefined
  const requestHeaders = { "Content-Type": "application/json", ...headers };

  const response = await fetch(`${API_URL}/${endpoint}`, {
    method,
    headers: requestHeaders,
    body: requestBody
  })

  if (!response.ok) {
    let errorResponse;
    try {
      const responseBody = await response.json()
      errorResponse = responseBody?.message
    } catch {
      errorResponse = await response.text()
    }
    throw new Error(errorResponse)
  }

  const contentType = response.headers.get("content-type")
  if (contentType?.includes('application/json')) {
    return response.json()
  } else if (contentType?.includes('text/')) {
    const text = await response.text();
    return text as T
  } else {
    throw new Error("Unsupported content type")
  }
}
