import { HttpTypes } from "@medusajs/types"
import Image from "next/image"

type LineItemPrintPreviewProps = {
  variant: HttpTypes.StoreProductVariant | undefined
  type?: "full" | "preview"
}

type PrintPreview = {
  key: string
  images: {
    src: string
    alt: string
    label?: string
  }[]
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

const getPrintPreview = (
  variant: HttpTypes.StoreProductVariant | undefined
): PrintPreview | null => {
  const searchText = getVariantSearchText(variant)

  if (searchText.includes("wariant 3")) {
    return {
      key: "variant-3",
      images: [
        {
          src: "/prints/print-3-front.png",
          alt: "Wariant 3 — grafika z przodu",
          label: "Przód",
        },
        {
          src: "/prints/print-3-back.png",
          alt: "Wariant 3 — grafika z tyłu",
          label: "Tył",
        },
      ],
    }
  }

  if (searchText.includes("wariant 2")) {
    return {
      key: "variant-2",
      images: [
        {
          src: "/prints/print-2-front.png",
          alt: "Wariant 2 — grafika z przodu",
        },
      ],
    }
  }

  if (searchText.includes("wariant 1")) {
    return {
      key: "variant-1",
      images: [
        {
          src: "/prints/print-1-front.png",
          alt: "Wariant 1 — grafika z przodu",
        },
      ],
    }
  }

  return null
}

const LineItemPrintPreview = ({
  variant,
  type = "full",
}: LineItemPrintPreviewProps) => {
  const preview = getPrintPreview(variant)

  if (!preview) {
    return null
  }

  const isCompact = type === "preview"

  return (
    <div
      className={
        isCompact
          ? "hidden"
          : "flex shrink-0 gap-1 rounded-rounded border border-ui-border-base bg-white p-1"
      }
      aria-label="Wybrany motyw koszulki"
    >
      {preview.images.map((image) => (
        <div
          key={image.src}
          className="relative h-12 w-12 overflow-hidden rounded-md bg-ui-bg-subtle small:h-16 small:w-16"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="64px"
            className="object-cover"
          />

          {image.label && (
            <span className="absolute left-1 top-1 rounded-full bg-black/75 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-white">
              {image.label}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

export default LineItemPrintPreview
