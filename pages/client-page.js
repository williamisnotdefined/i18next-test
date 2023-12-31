import Link from 'next/link'

import { useTranslation } from 'next-i18next'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const ClientPage = () => {
  const { t, ready } = useTranslation('testing')
  if (!ready) return 'loading translations...'
  // but because of this ready return, you may see a warning like this: "Expected server HTML to contain a matching text node for..."

  return (
    <div>
      <h1>client page: {t("testing:page_one")}</h1>

      <Link href="/two">
        {t("testing:go_to_page_two")}
      </Link>

      <br />

      <Link href="/lazy-reload-page">
        lazy reload on client side
      </Link>
    </div>
  )
}

// ADVICE: I suggest you don't use this client-side only approach, but use the lazy-reload approach instead!
//
// Without the getStaticProps or getServerSideProps function,
// the translsations are loaded via configured i18next backend.
//
// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...await serverSideTranslations(locale, ['testing']),
//   },
// })

export default ClientPage
