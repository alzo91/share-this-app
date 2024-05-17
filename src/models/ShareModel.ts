export type ShareVisibility = "all" | "just-mine" | "shared" | "public";
export interface ShareWithModel {
  can: "read" | "write";
  key: string;
}

export interface ShareItemsModel {
  done?: "pending" | "in progress" | "done";
  name: string;
  price?: number;
}

export interface ShareModel {
  id: string;
  createdAt?: Date | null;
  description: string;
  executedIn?: Date | null;
  items: ShareItemsModel[];
  name: string;
  owner: string;
  share: ShareWithModel[];
  backgroundImage: string;
  visibility?: ShareVisibility;
}
