import { NextPageWithLayout } from "@/pages/_app.page";
import { useState } from "react";
import { Layout } from "@/features/layout";

const HomePage: NextPageWithLayout = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  return (
    <main className="flex items-center justify-center p-24">Hello World</main>
  );
};

HomePage.getLayout = (page) => {
  return (
    <Layout showHeader={true} requiresAuth={false}>
      {page}
    </Layout>
  );
};

export default HomePage;
