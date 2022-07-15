import { useToken } from "@hooks/useToken";
import { TOKEN_POST, USER_GET } from "@lib/apiRoutes";
import { createContext, ReactNode, useContext, useState } from "react";

interface User {
  id: number;
  username: string;
  name: string;
  email: string;
}

interface UserContextProps {
  data: User | null | undefined;
  userLogin: (username: string, password: string) => void;
}

interface UserStorageProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

export function UserStorage({ children }: UserStorageProps) {
  const [data, setData] = useState<User | null>();
  const [login, setLogin] = useState<boolean>(false);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const { setToken } = useToken();

  async function getUser(token: string) {
    const { data } = await USER_GET(token);
    setData(data);
    setLogin(true);
  }

  async function userLogin(username: string, password: string) {
    const { data } = await TOKEN_POST({
      data: {
        username,
        password,
      },
    });

    setToken(data.token);
    getUser(data.token);
  }

  return (
    <UserContext.Provider
      value={{
        userLogin,
        data,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
