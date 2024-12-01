import { ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
  showHeader?: boolean;
  requiresAuth?: boolean;
};
