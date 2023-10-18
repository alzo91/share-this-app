import { SharesService as IShareService } from "./interface";
import SharesFirebase from "./implementations/shares.firebase";
import SharesInMemory from "./implementations/shares.in.memory";

class SharesService {
  private static instance: IShareService;

  private services = [
    { service: SharesInMemory, enabled: false },
    { service: SharesFirebase, enabled: true },
  ];

  public getInstance() {
    if (!SharesService.instance) {
      const service = this.services.find((s) => s.enabled);
      if (!service) throw new Error("Can't initialize UserRepository");
      SharesService.instance = new service.service();
    }

    return SharesService.instance;
  }
}

export default SharesService;
