import {
  ForgotPasswordProps,
  LoggingProps,
  SubscribeProps,
} from "src/models/Login";
import { User } from "src/models/User";

export abstract class UserService {
  abstract create(data: SubscribeProps): Promise<User>;
  abstract update(user: User): Promise<void>;
  abstract recovery(data: ForgotPasswordProps): Promise<void>;
  abstract logging(data: LoggingProps): Promise<User>;
  abstract logout(): Promise<void>;
}
