import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from 'next/link'
import { useTranslation } from "next-i18next";

export default function HomeTwo() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("testing:page_two")}</h1>

      <Link href="/one">
        {t("testing:go_to_page_one")}
      </Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", [
        "testing"
      ])),
    },
  };
};