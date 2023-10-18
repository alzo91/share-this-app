import firestore from "@react-native-firebase/firestore";
import { ShareModel } from "src/models/ShareModel";
import { SharesService, GetAllShares, GetTheLatest } from "../interface";

class SharesServiceFirebase implements SharesService {
  SHARE_COLLECTION = "shares";
  private lastDoc: any = undefined;

  public setLastDoc(doc: any) {
    this.lastDoc = doc;
  }

  public getLastDoc() {
    return this.lastDoc;
  }

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
    let queryShares = firestore()
      .collection(this.SHARE_COLLECTION)
      .orderBy("createdAt", order);

    const lastDocRef = this.getLastDoc();
    console.log({ lastDocRef });

    if (skip > 1 && lastDocRef) {
      queryShares = queryShares.startAfter(lastDocRef);
    }

    const shares = await queryShares.limit(take).get();

    const formattedShares: ShareModel[] = [];
    shares.docs.forEach((item) => {
      const currentItem = item.data() as ShareModel;
      /** console.log(item.id, currentItem); console.log(item.metadata); */

      formattedShares.push({
        ...currentItem,
        id: item.id,
        //@ts-ignore
        createdAt: currentItem.createdAt?.toDate(),
      });
    });

    this.setLastDoc(shares.docs[shares.docs.length - 1]);

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
      .get();

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
