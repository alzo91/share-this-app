import firestore from "@react-native-firebase/firestore";

import { ShareModel } from "src/models/ShareModel";
import { SharesService, GetAllShares } from "../interface";

class SharesServiceFirebase implements SharesService {
  async create(data: Omit<ShareModel, "id">): Promise<{ uuid: string }> {
    const response = await firestore().collection("shares").add(data);
    return { uuid: response.id };
  }

  getAll(params: GetAllShares): Promise<ShareModel[]> {
    throw new Error("Method not implemented.");
  }
  getTheLatest(params: { limit?: number | undefined }): Promise<ShareModel[]> {
    throw new Error("Method not implemented.");
  }
}

export default SharesServiceFirebase;
