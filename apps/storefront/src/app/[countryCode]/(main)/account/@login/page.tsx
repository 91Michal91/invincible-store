import { shopConfig } from "@lib/config/shop"
import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Zaloguj się",
  description: `Zaloguj się do konta klienta w sklepie ${shopConfig.store.name}.`,
}

export default function Login() {
  return <LoginTemplate />
}
