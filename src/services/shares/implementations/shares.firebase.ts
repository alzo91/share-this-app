import firestore from "@react-native-firebase/firestore";
import { ShareModel } from "src/models/ShareModel";
import { SharesService, GetAllShares, GetTheLatest } from "../interface";

class SharesServiceFirebase implements SharesService {
  SHARE_COLLECTION = "shares";

  async create(data: Omit<ShareModel, "id">): Promise<{ uuid: string }> {
    const response = await firestore().collection("shares").add(data);
    return { uuid: response.id };
  }

  async getAll({
    skip = 0,
    take = 10,
    order,
    type,
    lastID,
  }: GetAllShares): Promise<ShareModel[]> {
    const queryShares = firestore()
      .collection(this.SHARE_COLLECTION)
      .orderBy("createdAt", order);

    if (skip > 1 && lastID) {
      const lastDoc = await firestore()
        .collection(this.SHARE_COLLECTION)
        .doc(lastID)
        .get();

      queryShares.startAfter(lastDoc);
    }

    const shares = await queryShares.limit(take).get();

    const formattedShares: ShareModel[] = [];
    shares.forEach((item) => {
      const currentItem = item.data() as ShareModel;
      /** console.log(item.id, currentItem); console.log(item.metadata); */

      formattedShares.push({
        ...currentItem,
        id: item.id,
        //@ts-ignore
        createdAt: currentItem.createdAt?.toDate(),
      });
    });

    return formattedShares;
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
