import {
  SubscribeProps,
  ForgotPasswordProps,
  LoggingProps,
} from "src/models/Login";
import { User } from "src/models/User";
import { UserService } from "../interface";

class UserInMemory implements UserService {
  create(data: SubscribeProps): Promise<User> {
    throw new Error("UserInMemory.create method not implemented.");
  }
  update(user: User): Promise<void> {
    throw new Error("UserInMemory.update method not implemented.");
  }
  recovery(data: ForgotPasswordProps): Promise<void> {
    throw new Error("UserInMemory.recovery method not implemented.");
  }
  logging(data: LoggingProps): Promise<User> {
    throw new Error("UserInMemory.logging method not implemented.");
  }
  logout(): Promise<void> {
    throw new Error("UserInMemory.logout method not implemented.");
  }
}
export default UserInMemory;
