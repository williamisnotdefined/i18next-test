import Link from 'next/link'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { useEffect } from 'react'

const LazyReloadPage = () => {

  const { t, i18n } = useTranslation('testing', { bindI18n: 'languageChanged loaded' })
  // bindI18n: loaded is needed because of the reloadResources call
  // if all pages use the reloadResources mechanism, the bindI18n option can also be defined in next-i18next.config.js
  useEffect(() => {
    i18n.reloadResources(i18n.resolvedLanguage, ['testing'])
  }, [])

  return (
    <div>
      <h1>lazy reload on client side: {t("testing:page_two")}</h1>

      <Link href="/two">
        {t("testing:go_to_page_one")}
      </Link>

      <br />

      <Link href="/client-page">
        client side loaded
      </Link>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['testing']),
  },
})

export default LazyReloadPage
