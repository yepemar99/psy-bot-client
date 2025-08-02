import { routes } from "@/routes";
import { BaseService } from "./service";
import type { IChat, IChatResponse } from "@/types/chat.interface";

class ChatService extends BaseService {
  async getChats({
    page = 1,
    perPage = 10,
    userId = "",
  }: {
    page?: number;
    perPage?: number;
    userId?: string;
  }): Promise<IChatResponse> {
    const response = await this.get<IChatResponse>(routes.api.chats, {
      params: { page, per_page: perPage, user_id: userId },
    });
    return {
      page: response?.data?.page || 1,
      perPage: response?.data?.perPage || 10,
      total: response?.data?.total || 0,
      data: response?.data?.data as IChat[],
    };
  }
}

const baseURL = import.meta.env.VITE_API_BASE_URL || "";
const chatService = new ChatService(baseURL);
export default chatService;
