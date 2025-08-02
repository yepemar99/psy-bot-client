import { routes } from "@/routes";
import chatService from "@/services/chat.services";
import useSWR from "swr";

const useChats = (page = 1, perPage = 10, userId = "") => {
  const { data, error, isLoading, mutate } = useSWR(
    [routes.api.chats, { page, perPage, userId }],
    async () => {
      const response = await chatService.getChats({ page, perPage, userId });
      return response;
    }
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useChats;
