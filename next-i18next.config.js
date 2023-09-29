const ChainedBackend = require("i18next-chained-backend").default;
const HttpBackend = require("i18next-http-backend/cjs");
const LocalStorageBackend = require("i18next-localstorage-backend").default;
// const path = require("path");

const isBrowser = typeof window !== "undefined";

module.exports = {
  // debug: true,

  i18n: {
    defaultLocale: "en",
    locales: ["pt-BR", "en"],
  },

  // localePath: isBrowser ? path.resolve("./public/locales") : "/locales",

  backend: {
    backends: isBrowser ? [LocalStorageBackend, HttpBackend] : [HttpBackend],
    backendOptions: [
      {
        expirationTime: 7 * 24 * 60 * 60 * 1000,
        prefix: "i18next_res_",
        version: {},
        store: isBrowser ? window.localStorage : null,
      },
      { loadPath: "/public/locales/{{lng}}/{{ns}}.json" },
    ],
  },

  // partialBundledLanguages: false,
  // defaultNS: ["testing"],
  // ns: ["testing"],

  serializeConfig: false,

  // reloadOnPrerender: false,
  // react: { useSuspense: false },

  use: isBrowser ? [ChainedBackend] : [],
};
