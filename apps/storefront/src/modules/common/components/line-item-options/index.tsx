import { HttpTypes } from "@medusajs/types"
import { Text } from "@modules/common/components/ui"

type LineItemOptionsProps = {
  variant: HttpTypes.StoreProductVariant | undefined
  "data-testid"?: string
  "data-value"?: HttpTypes.StoreProductVariant
}

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")

const getVariantSearchText = (
  variant: HttpTypes.StoreProductVariant | undefined
) => {
  const title = variant?.title ?? ""
  const optionValues =
    variant?.options?.map((option) => option.value).filter(Boolean).join(" ") ??
    ""

  return normalize(`${title} ${optionValues}`)
}

const getVariantLabel = (
  variant: HttpTypes.StoreProductVariant | undefined
) => {
  const searchText = getVariantSearchText(variant)

  if (searchText.includes("wariant 3")) {
    return "Wzór: Wariant 3 — przód i tył"
  }

  if (searchText.includes("wariant 2")) {
    return "Wzór: Wariant 2 — grafika z przodu"
  }

  if (searchText.includes("wariant 1")) {
    return "Wzór: Wariant 1 — grafika z przodu"
  }

  return `Wariant: ${variant?.title ?? "-"}`
}

const LineItemOptions = ({
  variant,
  "data-testid": dataTestid,
  "data-value": dataValue,
}: LineItemOptionsProps) => {
  return (
    <Text
      data-testid={dataTestid}
      data-value={dataValue}
      className="inline-block txt-medium text-ui-fg-subtle w-full overflow-hidden text-ellipsis"
    >
      {getVariantLabel(variant)}
    </Text>
  )
}

export default LineItemOptions
