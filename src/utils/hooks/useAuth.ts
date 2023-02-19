import { useContext, useEffect, useState } from "react";
import { getAuthUser } from "../api";
import { AuthContext } from "../context/AuthContext";

export function useAuth() {
  const { user, updateAuthUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const controller = new AbortController();

  useEffect(() => {
    getAuthUser()
      .then(({ data }) => {
        console.log(data);
        updateAuthUser(data);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => setLoading(false), 1000);
      });

    return () => {
      controller.abort();
    };
    // eslint-disable-next-line
  }, []);

  return { user, loading };
}
