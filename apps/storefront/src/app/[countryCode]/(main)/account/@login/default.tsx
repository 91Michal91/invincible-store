import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function AccountLoginFallback() {
  return (
    <div className="w-full" data-testid="account-session-expired-wrapper">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Sesja wygasła</h1>

        <p className="text-base-regular text-ui-fg-subtle">
          Nie udało się otworzyć tej części konta, ponieważ sesja klienta wygasła albo wymaga ponownego logowania.
        </p>

        <p className="text-base-regular text-ui-fg-subtle">
          Zaloguj się ponownie, aby przejść do zamówień, profilu lub adresów.
        </p>

        <div>
          <LocalizedClientLink
            href="/account"
            className="inline-flex items-center justify-center rounded-md border border-ui-border-base px-4 py-2 text-base-semi hover:bg-ui-bg-base-hover"
          >
            Przejdź do logowania
          </LocalizedClientLink>
        </div>
      </div>
    </div>
  )
}
