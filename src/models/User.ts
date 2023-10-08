export interface User {
  uuid: string;
  uid: string;
  email: string;
  photoURL?: string | null;
  phoneNumber?: string | null;
  displayName?: string | null;
  emailVerified: boolean;
  isAnonymous: boolean;
  providerId: string;
  metadata: { creation?: string | null; lastSign?: string | null };
}
