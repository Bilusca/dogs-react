import { AxiosRequestConfig, AxiosResponse } from "axios";
import { api } from "./api";

interface TokenResponse {
  token: string;
}

async function TOKEN_POST({ data }: AxiosRequestConfig) {
  return await api.post<TokenResponse>("/jwt-auth/v1/token", data);
}

interface UserResponse {
  id: number;
  username: string;
  name: string;
  email: string;
}

async function USER_GET(token: string) {
  return await api.get<UserResponse>("/api/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export { TOKEN_POST, USER_GET };
