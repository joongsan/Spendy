import { UserRole } from "./users.config";

export type User = {
  id: string;
  username: string;
  email: string;
  role: UserRole;
};
