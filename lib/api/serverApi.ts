import { cookies } from "next/headers";
import { nextServer } from "./api";
import { User } from "./clientApi";

export const checkServerSession = async () => {
  const cookieStore = await cookies();
  const response = await nextServer.get("/auth/session", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return response;
};

export const getServerMe = async (): Promise<User> => {
  const cookieStore = await cookies();
  const { data } = await nextServer.get("/auth/me", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return data;
};
