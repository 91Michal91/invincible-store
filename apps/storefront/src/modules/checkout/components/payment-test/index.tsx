import { Badge } from "@modules/common/components/ui"

const PaymentTest = ({ className }: { className?: string }) => {
  return (
    <Badge color="orange" className={className}>
      <span className="font-semibold">Uwaga:</span> Tylko do testów
      only.
    </Badge>
  )
}

export default PaymentTest
