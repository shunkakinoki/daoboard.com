import { DefaultSeo as Default } from "next-seo";
import Head from "next/head";
import type { FC } from "react";

export const Seo: FC = () => {
  return (
    <>
      <Default
        noindex={false}
        nofollow={false}
        title="daoboard"
        canonical="https://daoboard.com"
        description="Like degenscore for DAOs."
        openGraph={{
          locale: "en_US",
          site_name: "daoboard.com",
          type: "website",
          url: "https://www.daoboard.com",
          images: [
            {
              url: "https://og.sentrei.com/api/image?fileType=png&layoutName=Sentrei&Theme=Dark&Title=Daoboard&Sub+Title=Like+degenscore+for+DAOs.",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
          handle: "@daoboard",
          site: "@daoboard",
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
    </>
  );
};
