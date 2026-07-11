"use client"

import { HttpTypes } from "@medusajs/types"
import { Container } from "@modules/common/components/ui"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

type PrintImage = {
  id: string
  url: string
  alt: string
  label?: string
}

const printVariantImages: Record<string, PrintImage[]> = {
  "variant-1": [
    {
      id: "print-1-front",
      url: "/prints/print-1-front.png",
      alt: "Wariant 1 — grafika z przodu",
    },
  ],
  "variant-2": [
    {
      id: "print-2-front",
      url: "/prints/print-2-front.png",
      alt: "Wariant 2 — grafika z przodu",
    },
  ],
  "variant-3": [
    {
      id: "print-3-front",
      url: "/prints/print-3-front.png",
      alt: "Wariant 3 — grafika z przodu",
      label: "Przód",
    },
    {
      id: "print-3-back",
      url: "/prints/print-3-back.png",
      alt: "Wariant 3 — grafika z tyłu",
      label: "Tył",
    },
  ],
}

const normalizeText = (value: string) => {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}

const colorKeywords: Record<string, string[]> = {
  black: ["black", "czarn"],
  white: ["white", "bial", "bia"],
  czarny: ["black", "czarn"],
  bialy: ["white", "bial", "bia"],
  biały: ["white", "bial", "bia"],
}

const getColorKeywords = (color: string) => {
  const normalizedColor = normalizeText(color)

  return colorKeywords[normalizedColor] ?? [normalizedColor]
}

const imageMatchesColor = (imageUrl: string | null | undefined, color: string) => {
  if (!imageUrl) {
    return false
  }

  const normalizedUrl = normalizeText(imageUrl)
  const keywords = getColorKeywords(color)

  return keywords.some((keyword) => normalizedUrl.includes(keyword))
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const searchParams = useSearchParams()
  const selectedColor = searchParams.get("color")
  const isWhiteSelected = selectedColor?.toLowerCase() === "white"
  const [selectedPrintVariant, setSelectedPrintVariant] = useState<string | null>(null)

  useEffect(() => {
    const handlePrintVariantSelected = (event: Event) => {
      const customEvent = event as CustomEvent<{ variant?: string }>
      const variant = customEvent.detail?.variant

      if (variant && printVariantImages[variant]) {
        setSelectedPrintVariant(variant)
      }
    }

    window.addEventListener("print-variant-selected", handlePrintVariantSelected)

    return () => {
      window.removeEventListener("print-variant-selected", handlePrintVariantSelected)
    }
  }, [])

  const colorImages = selectedColor
    ? images.filter((image) => imageMatchesColor(image.url, selectedColor))
    : []

  const visibleImages = colorImages.length > 0 ? colorImages : images
  const selectedPrintImages = selectedPrintVariant
    ? printVariantImages[selectedPrintVariant]
    : null

  return (
    <div className="flex items-start relative" id="product-image-gallery">
      <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
        {selectedPrintImages
          ? selectedPrintImages.map((image, index) => {
              return (
                <Container
                  key={image.id}
                  className="relative aspect-square w-full overflow-hidden bg-white"
                  id={image.id}
                >
                  <Image
                    src={image.url}
                    priority={index <= 1}
                    className="absolute inset-0 rounded-rounded"
                    alt={image.alt}
                    fill
                    sizes="(max-width: 576px) 360px, (max-width: 768px) 480px, (max-width: 992px) 600px, 800px"
                    style={{
                      objectFit: "contain",
                    }}
                  />

                  {image.label && (
                    <span className="absolute left-4 top-4 rounded-full bg-black/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                      {image.label}
                    </span>
                  )}
                </Container>
              )
            })
          : visibleImages.map((image, index) => {
              return (
                <Container
                  key={image.id}
                  className={`relative aspect-[29/34] w-full overflow-hidden ${
                    isWhiteSelected
                      ? "bg-gradient-to-br from-[#0f766e] via-[#14b8a6] to-[#5eead4]"
                      : "bg-ui-bg-subtle"
                  }`}
                  id={image.id}
                >
                  {!!image.url && (
                    <Image
                      src={image.url}
                      priority={index <= 2 ? true : false}
                      className="absolute inset-0 rounded-rounded"
                      alt={`Product image ${index + 1}`}
                      fill
                      sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  )}
                </Container>
              )
            })}
      </div>
    </div>
  )
}

export default ImageGallery
