import UserFirebase from "./implementations/user.firebase";
import UserInMemory from "./implementations/user.in.memory";
import { UserService as IUserService } from "./interface/index";

class UserService {
  private static instance: IUserService;

  private services = [
    { service: UserInMemory, enabled: false },
    { service: UserFirebase, enabled: true },
  ];

  public getInstance() {
    if (!UserService.instance) {
      const service = this.services.find((s) => s.enabled);
      if (!service) throw new Error("Can't initialize UserRepository");
      UserService.instance = new service.service();
    }

    return UserService.instance;
  }
}

export default UserService;
