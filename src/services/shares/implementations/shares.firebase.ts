import firestore from "@react-native-firebase/firestore";
import { ShareModel } from "src/models/ShareModel";
import { SharesService, GetAllShares, GetTheLatest } from "../interface";

class SharesServiceFirebase implements SharesService {
  SHARE_COLLECTION = "shares";

  async create(data: Omit<ShareModel, "id">): Promise<{ uuid: string }> {
    const response = await firestore().collection("shares").add(data);
    return { uuid: response.id };
  }

  getAll(params: GetAllShares): Promise<ShareModel[]> {
    throw new Error("Method not implemented.");
  }

  async getTheLatest(params: GetTheLatest): Promise<ShareModel[]> {
    const { userUuid, limit = 5 } = params;
    console.log("SharesServiceFirebase.getTheLatest", userUuid, limit);

    const shares = await firestore()
      .collection(this.SHARE_COLLECTION)
      .where("share", "array-contains-any", [{ key: userUuid, can: "write" }])
      .orderBy("createdAt", "desc")
      .limit(limit)
      .get({ source: "cache" });

    const shareList: ShareModel[] = [];
    shares.forEach((item) => {
      const currentItem = item.data() as ShareModel;
      /** console.log(item.id, currentItem); console.log(item.metadata); */

      shareList.push({
        ...currentItem,
        id: item.id,
        //@ts-ignore
        createdAt: currentItem.createdAt?.toDate(),
      });
    });
    return shareList;
  }
}

export default SharesServiceFirebase;
