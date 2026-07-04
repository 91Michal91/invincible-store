type ShopMode = "demo" | "production"

const storeName = process.env.NEXT_PUBLIC_SHOP_NAME || "SKLEP"
const locale = process.env.NEXT_PUBLIC_SHOP_LOCALE || "pl-PL"
const currency = process.env.NEXT_PUBLIC_SHOP_CURRENCY || "PLN"
const shopMode = (process.env.NEXT_PUBLIC_SHOP_MODE as ShopMode) || "demo"

export const shopConfig = {
  mode: shopMode,

  store: {
    name: storeName,
    locale,
    currency,
    tagline:
      process.env.NEXT_PUBLIC_SHOP_TAGLINE ||
      "Nowoczesny sklep internetowy",
    description:
      process.env.NEXT_PUBLIC_SHOP_DESCRIPTION ||
      "Komercyjny szablon sklepu oparty o Medusa.js, Next.js, PostgreSQL i Docker.",
  },

  company: {
    name: process.env.NEXT_PUBLIC_COMPANY_NAME || "Janusz Kowalski",
    street: process.env.NEXT_PUBLIC_COMPANY_STREET || "ul. Przykładowa 12/4",
    postalCode: process.env.NEXT_PUBLIC_COMPANY_POSTAL_CODE || "00-001",
    city: process.env.NEXT_PUBLIC_COMPANY_CITY || "Warszawa",
    country: process.env.NEXT_PUBLIC_COMPANY_COUNTRY || "Polska",
    email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "janusz.kowalski@example.com",
    phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "+48 000 000 000",
    nip: process.env.NEXT_PUBLIC_COMPANY_NIP || "0000000000",
  },

  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "janusz.kowalski@example.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+48 000 000 000",
    workingHours:
      process.env.NEXT_PUBLIC_CONTACT_WORKING_HOURS ||
      "Poniedziałek–piątek, 9:00–17:00",
  },

  social: {
    facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK || "",
    instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || "",
    tiktok: process.env.NEXT_PUBLIC_SOCIAL_TIKTOK || "",
    linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || "",
  },

  legal: {
    privacyPolicyUpdatedAt:
      process.env.NEXT_PUBLIC_PRIVACY_POLICY_UPDATED_AT || "2026-07-01",
    termsUpdatedAt:
      process.env.NEXT_PUBLIC_TERMS_UPDATED_AT || "2026-07-01",
  },

  demo: {
    enabled: shopMode === "demo",
    label: "Wersja demonstracyjna",
    notice:
      "To przykładowa treść demonstracyjna. W docelowym sklepie dane należy dostosować do faktycznej działalności.",
  },
}

// Stary eksport zostaje dla kompatybilności z istniejącym kodem.
export const SHOP_CONFIG = {
  name: shopConfig.store.name,
  locale: shopConfig.store.locale,
  currency: shopConfig.store.currency,
}

export const isDemoStore = shopConfig.mode === "demo"

export default shopConfig
