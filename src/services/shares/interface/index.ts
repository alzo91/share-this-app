import { ShareModel, ShareVisibility } from "src/models/ShareModel";

export type GetAllShares = {
  skip?: number;
  take?: number;
  order?: "asc" | "desc";
  type?: ShareVisibility;
  userUuid: string;
};

export type GetTheLatest = { limit?: number | undefined; userUuid: string };
export abstract class SharesService {
  abstract create(data: Omit<ShareModel, "id">): Promise<{ uuid: string }>;
  abstract getAll(params: GetAllShares): Promise<ShareModel[]>;
  abstract getTheLatest(params: GetTheLatest): Promise<ShareModel[]>;
}
