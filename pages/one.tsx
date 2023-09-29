import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/one'), {ssr: false});

function One(props: any) {
  return (
    <div>
      <DynamicComponent {...props} />
    </div>
  );
}

export default One;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", [
        "testing"
      ])),
    },
  };
};
