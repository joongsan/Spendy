import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { useAuth } from "@/features/auth/";
import { Header } from "@/features/header/header.component";
import { OverlaySpinner } from "@/features/ui/overlay-spinner/";
import { LayoutProps } from "./layout.types";
import styles from "./layout.module.css";

export const Layout = ({
  children,
  showHeader = false,
  requiresAuth = false,
}: LayoutProps) => {
  const { user, loading: userLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (userLoading) return;

    if (requiresAuth && !user) {
      router.replace("/login");
    }

    if (!requiresAuth && user) {
      router.replace("/");
    }
  }, [user, router, requiresAuth, userLoading]);

  return (
    <>
      <Head>
        <title>Spendy</title>
        <meta name="description" content="Spendy" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} light text-black dark:text-white`}>
        {showHeader && <Header />}
        {userLoading ? <OverlaySpinner /> : children}
      </main>
    </>
  );
};
