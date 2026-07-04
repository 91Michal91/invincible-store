import { Metadata } from "next"
import { Suspense } from "react"

import VerifyKonto from "@modules/account/components/verify-account"

export const metadata: Metadata = {
  title: "Verify your email",
  description: "Verify your email address to complete your registration.",
}

export default function VerifyKontoPage() {
  return (
    <div className="w-full flex justify-center px-8 py-12">
      <Suspense
        fallback={
          <p className="text-base-regular text-ui-fg-base">
            Verifying your email...
          </p>
        }
      >
        <VerifyKonto />
      </Suspense>
    </div>
  )
}
