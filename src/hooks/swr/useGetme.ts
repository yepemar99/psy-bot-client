import { routes } from "@/routes";
import authService from "@/services/auth.services";
import useSWR from "swr";

const useGetMe = () => {
  const { data, error, isLoading } = useSWR(routes.api.me, async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No authentication token found");
    }
    const response = await authService.getme(token);
    return response;
  });

  return {
    data,
    error,
    isLoading,
  };
};

export default useGetMe;
