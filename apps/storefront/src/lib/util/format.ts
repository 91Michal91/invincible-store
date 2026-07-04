const fallbackLabel = "Brak danych"

const normalizeStatus = (status?: string | null) => {
  return status?.trim().toLowerCase() || ""
}

const prettifyStatus = (status: string) => {
  if (!status) {
    return fallbackLabel
  }

  return status
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

export const formatDatePL = (
  value?: string | Date | null,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
) => {
  if (!value) {
    return fallbackLabel
  }

  const date = value instanceof Date ? value : new Date(value)

  if (Number.isNaN(date.getTime())) {
    return fallbackLabel
  }

  return new Intl.DateTimeFormat("pl-PL", options).format(date)
}

export const formatOrderStatus = (status?: string | null) => {
  const normalizedStatus = normalizeStatus(status)

  const labels: Record<string, string> = {
    pending: "Oczekujące",
    completed: "Zakończone",
    archived: "Zarchiwizowane",
    canceled: "Anulowane",
    requires_action: "Wymaga działania",

    not_fulfilled: "Nie zrealizowano",
    partially_fulfilled: "Częściowo zrealizowano",
    fulfilled: "Zrealizowano",
    partially_shipped: "Częściowo wysłano",
    shipped: "Wysłano",
    partially_delivered: "Częściowo dostarczono",
    delivered: "Dostarczono",
    partially_returned: "Częściowo zwrócono",
    returned: "Zwrócono",
  }

  return labels[normalizedStatus] ?? prettifyStatus(normalizedStatus)
}

export const formatPaymentStatus = (status?: string | null) => {
  const normalizedStatus = normalizeStatus(status)

  const labels: Record<string, string> = {
    not_paid: "Nieopłacone",
    awaiting: "Oczekuje na płatność",
    authorized: "Autoryzowana",
    partially_authorized: "Częściowo autoryzowana",
    captured: "Opłacone",
    partially_captured: "Częściowo opłacone",
    partially_refunded: "Częściowo zwrócone",
    refunded: "Zwrócone",
    canceled: "Anulowane",
    requires_action: "Wymaga działania",
  }

  return labels[normalizedStatus] ?? prettifyStatus(normalizedStatus)
}

export const formatCountryName = (countryCode?: string | null) => {
  const normalizedCountryCode = countryCode?.trim().toUpperCase()

  if (!normalizedCountryCode) {
    return fallbackLabel
  }

  const labels: Record<string, string> = {
    PL: "Polska",
    DE: "Niemcy",
    CZ: "Czechy",
    SK: "Słowacja",
    LT: "Litwa",
    FR: "Francja",
    ES: "Hiszpania",
    IT: "Włochy",
    NL: "Holandia",
    BE: "Belgia",
    AT: "Austria",
    DK: "Dania",
    SE: "Szwecja",
    NO: "Norwegia",
    FI: "Finlandia",
    GB: "Wielka Brytania",
    US: "Stany Zjednoczone",
  }

  return labels[normalizedCountryCode] ?? normalizedCountryCode
}

export const formatProductCount = (count?: number | null) => {
  if (typeof count !== "number" || Number.isNaN(count)) {
    return `0 produktów`
  }

  const absCount = Math.abs(count)

  if (absCount === 1) {
    return `${count} produkt`
  }

  const lastDigit = absCount % 10
  const lastTwoDigits = absCount % 100

  if (lastDigit >= 2 && lastDigit <= 4 && !(lastTwoDigits >= 12 && lastTwoDigits <= 14)) {
    return `${count} produkty`
  }

  return `${count} produktów`
}
