"use client"

import { HttpTypes } from "@medusajs/types"
import { Container } from "@modules/common/components/ui"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
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

  const colorImages = selectedColor
    ? images.filter((image) => imageMatchesColor(image.url, selectedColor))
    : []

  const visibleImages = colorImages.length > 0 ? colorImages : images

  return (
    <div className="flex items-start relative">
      <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
        {visibleImages.map((image, index) => {
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
