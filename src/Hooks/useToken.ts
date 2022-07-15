import { useState } from "react";

const key = "_token";

export function useToken() {
  const [data, setData] = useState(() => {
    try {
      const item = localStorage.getItem(key);

      return item;
    } catch (err) {
      return "";
    }
  });

  function setToken(token: string) {
    setData(token);
    localStorage.setItem(key, token);
  }

  return { token: data, setToken };
}
