import { shopConfig } from "@lib/config/shop"
import { listKategorie } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Text, clx } from "@modules/common/components/ui"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productKategorie = await listKategorie()

  const socialLinks = [
    { label: "Facebook", href: shopConfig.social.facebook },
    { label: "Instagram", href: shopConfig.social.instagram },
    { label: "TikTok", href: shopConfig.social.tiktok },
    { label: "LinkedIn", href: shopConfig.social.linkedin },
  ].filter((link) => Boolean(link.href))

  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">
        <div className="grid grid-cols-1 small:grid-cols-2 large:grid-cols-5 gap-10 py-20">
          <div className="flex flex-col gap-y-4 large:col-span-2">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              {shopConfig.store.name}
            </LocalizedClientLink>

            <p className="txt-small text-ui-fg-subtle max-w-sm">
              {shopConfig.store.description}
            </p>

            {shopConfig.demo.enabled && (
              <p className="txt-small text-ui-fg-muted max-w-sm">
                {shopConfig.demo.notice}
              </p>
            )}
          </div>

          {productKategorie && productKategorie?.length > 0 && (
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">
                Kategorie
              </span>
              <ul
                className="grid grid-cols-1 gap-2"
                data-testid="footer-categories"
              >
                {productKategorie?.slice(0, 6).map((c) => {
                  if (c.parent_category) {
                    return null
                  }

                  const children =
                    c.category_children?.map((child) => ({
                      name: child.name,
                      handle: child.handle,
                      id: child.id,
                    })) || null

                  return (
                    <li
                      className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                      key={c.id}
                    >
                      <LocalizedClientLink
                        className={clx(
                          "hover:text-ui-fg-base",
                          children && "txt-small-plus"
                        )}
                        href={`/categories/${c.handle}`}
                        data-testid="category-link"
                      >
                        {c.name}
                      </LocalizedClientLink>
                      {children && (
                        <ul className="grid grid-cols-1 ml-3 gap-2">
                          {children.map((child) => (
                            <li key={child.id}>
                              <LocalizedClientLink
                                className="hover:text-ui-fg-base"
                                href={`/categories/${child.handle}`}
                                data-testid="category-link"
                              >
                                {child.name}
                              </LocalizedClientLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {collections && collections.length > 0 && (
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">
                Kolekcje
              </span>
              <ul
                className={clx(
                  "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                  {
                    "grid-cols-2": (collections?.length || 0) > 3,
                  }
                )}
              >
                {collections?.slice(0, 6).map((c) => (
                  <li key={c.id}>
                    <LocalizedClientLink
                      className="hover:text-ui-fg-base"
                      href={`/collections/${c.handle}`}
                    >
                      {c.title}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col gap-y-2">
            <span className="txt-small-plus txt-ui-fg-base">Informacje</span>
            <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
              <li>
                <LocalizedClientLink className="hover:text-ui-fg-base" href="/about">
                  O sklepie
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink className="hover:text-ui-fg-base" href="/contact">
                  Kontakt
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink className="hover:text-ui-fg-base" href="/customer-service">
                  Obsługa klienta
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink className="hover:text-ui-fg-base" href="/returns-exchanges">
                  Zwroty i wymiany
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink className="hover:text-ui-fg-base" href="/terms">
                  Regulamin
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink className="hover:text-ui-fg-base" href="/privacy">
                  Polityka prywatności
                </LocalizedClientLink>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-2">
            <span className="txt-small-plus txt-ui-fg-base">Kontakt</span>
            <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
              <li>
                <a
                  className="hover:text-ui-fg-base"
                  href={`mailto:${shopConfig.contact.email}`}
                >
                  {shopConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-ui-fg-base"
                  href={`tel:${shopConfig.contact.phone.replaceAll(" ", "")}`}
                >
                  {shopConfig.contact.phone}
                </a>
              </li>
              <li>{shopConfig.contact.workingHours}</li>
            </ul>

            {socialLinks.length > 0 && (
              <div className="flex flex-col gap-y-2 pt-4">
                <span className="txt-small-plus txt-ui-fg-base">
                  Social media
                </span>
                <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                  {socialLinks.map((social) => (
                    <li key={social.label}>
                      <a
                        className="hover:text-ui-fg-base"
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {social.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} {shopConfig.store.name}. Wszelkie prawa zastrzeżone.
          </Text>
        </div>
      </div>
    </footer>
  )
}
