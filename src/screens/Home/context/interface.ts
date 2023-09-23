import { SmallContact } from "src/models/ContactModel";
import { ShareModel } from "src/models/ShareModel";

export interface HomeState {
  status: "loading" | "loading-contacts" | "already" | "error";
  shares: ShareModel[];
  contacts: SmallContact[];
  getShares: () => void;
}
