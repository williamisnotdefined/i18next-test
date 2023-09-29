import { useState } from "react";
import Link from 'next/link'
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation();

  const [state, setState] = useState(1)

  const onClick = () => {
    setState((s) => s + 1)
  }

  return (
    <div>
      <h1>{t("testing:page_one")}</h1>

      <Link href="/two">
        {t("testing:go_to_page_two")}
      </Link>

      <br />

      <Link href="/client-page">
        client side loaded
      </Link>

      <br />

      <Link href="/lazy-reload-page">
        lazy reload on client side
      </Link>
      
      <br />

      <button onClick={onClick}>{state}</button>
    </div>
  )
}
