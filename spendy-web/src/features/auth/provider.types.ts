import { ReactNode } from "react";
import { User } from "../users/users.type";

export type AuthProviderProps = {
  children: ReactNode;
};

export type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  login: (credentials: LogInProps) => void;
  logout: () => void;
};

export type LogInProps = {
  email: string;
  password: string;
};
