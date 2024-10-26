import { ShareModel } from "src/models/ShareModel";
import { SharesService, GetAllShares } from "../interface";

class SharesServiceInMemory implements SharesService {
  getOne(id: string): Promise<ShareModel> {
    throw new Error("Method not implemented.");
  }
  create(data: Omit<ShareModel, "id">): Promise<{ uuid: string }> {
    throw new Error("ShareServiceInMemory.create method not implemented.");
  }

  getAll(params: GetAllShares): Promise<ShareModel[]> {
    throw new Error("ShareServiceInMemory.getAll method not implemented.");
  }

  getTheLatest(params: { limit?: number | undefined }): Promise<ShareModel[]> {
    throw new Error(
      "ShareServiceInMemory.getTheLatest method not implemented."
    );
  }
}

export default SharesServiceInMemory;
