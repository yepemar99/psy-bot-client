import type { IResponse } from "./common/response.interface";

export interface IChat {
  id?: string;
  name: string;
  userId: string;
  createdAt: Date;
}

export interface IChatResponse extends IResponse {
  data: IChat[];
}
