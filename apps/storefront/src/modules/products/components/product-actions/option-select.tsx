import { HttpTypes } from "@medusajs/types"
import { clx } from "@modules/common/components/ui"
import React from "react"

type OptionSelectProps = {
  option: HttpTypes.StoreProductOption
  current: string | undefined
  updateOption: (title: string, value: string) => void
  title: string
  disabled: boolean
  "data-testid"?: string
}

type PrintPreview = {
  label: string
  description: string
  priceNote?: string
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

const isPrintOption = (title: string) => {
  const normalizedTitle = normalize(title)

  return (
    normalizedTitle.includes("wzor") ||
    normalizedTitle.includes("grafik") ||
    normalizedTitle.includes("nadruk")
  )
}

const getPrintVariantKey = (value: string) => {
  const normalizedValue = normalize(value)

  if (normalizedValue.includes("3")) {
    return "variant-3"
  }

  if (normalizedValue.includes("2")) {
    return "variant-2"
  }

  return "variant-1"
}

const getPrintPreview = (value: string): PrintPreview => {
  const normalizedValue = normalize(value)

  if (normalizedValue.includes("3")) {
    return {
      label: "Wariant 3",
      description: "Przód i tył",
      priceNote: "109 zł",
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

  if (normalizedValue.includes("2")) {
    return {
      label: "Wariant 2",
      description: "Grafika z przodu",
      images: [
        {
          src: "/prints/print-2-front.png",
          alt: "Wariant 2 — grafika z przodu",
        },
      ],
    }
  }

  return {
    label: "Wariant 1",
    description: "Grafika z przodu",
    images: [
      {
        src: "/prints/print-1-front.png",
        alt: "Wariant 1 — grafika z przodu",
      },
    ],
  }
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  "data-testid": dataTestId,
  disabled,
}) => {
  const filteredOptions = (option.values ?? []).map((v) => v.value)
  const printOption = isPrintOption(title)

  const handleOptionClick = (value: string) => {
    updateOption(option.id, value)

    if (printOption && typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("print-variant-selected", {
          detail: {
            variant: getPrintVariantKey(value),
          },
        })
      )
    }
  }

  React.useEffect(() => {
    if (!printOption || !current || typeof window === "undefined") {
      return
    }

    window.dispatchEvent(
      new CustomEvent("print-variant-selected", {
        detail: {
          variant: getPrintVariantKey(current),
        },
      })
    )
  }, [printOption, current])

  if (printOption) {
    return (
      <div className="flex flex-col gap-y-3">
        <span className="text-sm">Wybierz wzór koszulki</span>

        <div
          className="grid grid-cols-1 small:grid-cols-2 gap-3"
          data-testid={dataTestId}
        >
          {filteredOptions.map((v) => {
            const preview = getPrintPreview(v)
            const selected = v === current

            return (
              <button
                onClick={() => handleOptionClick(v)}
                key={v}
                disabled={disabled}
                data-testid="option-button"
                className={clx(
                  "group overflow-hidden rounded-rounded border bg-ui-bg-subtle text-left transition-all duration-150",
                  "hover:shadow-elevation-card-rest",
                  getPrintVariantKey(v) === "variant-3" && "small:col-span-2",
                  {
                    "border-ui-border-interactive ring-2 ring-ui-border-interactive":
                      selected,
                    "border-ui-border-base": !selected,
                    "opacity-50 cursor-not-allowed": disabled,
                  }
                )}
              >
                <div
                  className={clx("grid gap-1 bg-black", {
                    "grid-cols-2": preview.images.length > 1,
                    "grid-cols-1": preview.images.length === 1,
                  })}
                >
                  {preview.images.map((image) => (
                    <div
                      key={image.src}
                      className="relative aspect-square overflow-hidden bg-ui-bg-base"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                      />

                      {image.label && (
                        <span className="absolute left-2 top-2 rounded-full bg-black/70 px-2 py-1 text-[10px] uppercase tracking-wide text-white">
                          {image.label}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-1 p-3">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-small-regular font-semibold text-ui-fg-base">
                      {preview.label}
                    </span>

                    {preview.priceNote && (
                      <span className="shrink-0 rounded-full border-2 border-ui-fg-base bg-[#ffd400] px-3 py-1 text-sm font-black text-ui-fg-base shadow-elevation-card-rest">
                        {preview.priceNote}
                      </span>
                    )}
                  </div>

                  <span className="text-xs text-ui-fg-subtle">
                    {preview.description}
                  </span>

                  <span className="sr-only">{v}</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-sm">Wybierz {title.toLowerCase()}</span>
      <div
        className="flex flex-wrap justify-between gap-2"
        data-testid={dataTestId}
      >
        {filteredOptions.map((v) => {
          return (
            <button
              onClick={() => handleOptionClick(v)}
              key={v}
              className={clx(
                "border-ui-border-base bg-ui-bg-subtle border text-small-regular h-10 rounded-rounded p-2 flex-1 ",
                {
                  "border-ui-border-interactive": v === current,
                  "hover:shadow-elevation-card-rest transition-shadow ease-in-out duration-150":
                    v !== current,
                }
              )}
              disabled={disabled}
              data-testid="option-button"
            >
              {v}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default OptionSelect
