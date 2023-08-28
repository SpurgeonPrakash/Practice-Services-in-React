import {useState, useEffect} from "react";
import userService, { User } from "../services/userService";
import { CanceledError } from "../services/apiClient";

const useUsers = () => {
    const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.getAll<User>();

    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return {users, error, loading, setUsers, setError}
}

export default useUsers;