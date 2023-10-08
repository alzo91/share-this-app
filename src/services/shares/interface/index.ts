import { ShareModel } from "src/models/ShareModel";

export type GetAllShares = {
  skip: number;
  take: number;
  order: "asc" | "desc";
};

export abstract class SharesService {
  abstract create(data: Omit<ShareModel, "id">): Promise<{ uuid: string }>;
  abstract getAll(params: GetAllShares): Promise<ShareModel[]>;
  abstract getTheLatest(params: { limit?: number }): Promise<ShareModel[]>;
}
