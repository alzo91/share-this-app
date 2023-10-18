import {
  SubscribeProps,
  ForgotPasswordProps,
  LoggingProps,
} from "src/models/Login";
import { UserService } from "../interface";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import { User } from "src/models/User";

class UserFirebase implements UserService {
  async create(data: SubscribeProps): Promise<User> {
    const { user } = await auth().createUserWithEmailAndPassword(
      data.email,
      data.password
    );

    const createdUser: User = {
      uuid: user.uid,
      uid: user.uid,
      email: user.email!,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
      displayName: user.displayName,
      emailVerified: user.emailVerified,
      isAnonymous: user.isAnonymous,
      providerId: user.providerId,
      metadata: {
        creation: user.metadata.creationTime,
        lastSign: user.metadata.lastSignInTime,
      },
    };

    this.update(createdUser);

    return createdUser;
  }

  async update(user: User): Promise<void> {
    await firestore().collection("users").doc(user.uid).set(user);
  }

  async recovery(data: ForgotPasswordProps): Promise<void> {
    await auth().sendPasswordResetEmail(data.email);
  }

  async logging(data: LoggingProps): Promise<User> {
    const { user, additionalUserInfo } =
      await auth().signInWithEmailAndPassword(data.email, data.password);
    console.log("[user.firebase]", "logging", {
      uid: user.uid,
      email: user.email,
      additionalUserInfo,
    });
    const createdUser: User = {
      uuid: user.uid,
      uid: user.uid,
      email: user.email!,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
      displayName: user.displayName,
      emailVerified: user.emailVerified,
      isAnonymous: user.isAnonymous,
      providerId: user.providerId,
      metadata: {
        creation: user.metadata.creationTime,
        lastSign: user.metadata.lastSignInTime,
      },
    };

    this.update(createdUser);

    return createdUser;
  }

  async logout(): Promise<void> {
    await auth().signOut();
  }
}

export default UserFirebase;
