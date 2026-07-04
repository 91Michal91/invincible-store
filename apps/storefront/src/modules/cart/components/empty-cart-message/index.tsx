import { Heading, Text } from "@modules/common/components/ui"
import InteractiveLink from "@modules/common/components/interactive-link"

const EmptyCartMessage = () => {
  return (
    <div
      className="py-48 px-2 flex flex-col justify-center items-start"
      data-testid="empty-cart-message"
    >
      <Heading level="h1" className="text-3xl-semi">
        Koszyk
      </Heading>

      <Text className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        Twój koszyk jest pusty. Przejdź do sklepu i dodaj produkty do koszyka.
      </Text>

      <InteractiveLink href="/store">Zobacz produkty</InteractiveLink>
    </div>
  )
}

export default EmptyCartMessage
