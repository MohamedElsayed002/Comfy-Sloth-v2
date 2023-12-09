import { useSelector } from "react-redux"
import { formatPrice } from "../utils"

const CartTotals = () => {

    const { cartTotal, shipping, tax, orderTotal } = useSelector((state) => state.cartState)


    return (
        <div className="card bg-base-200">
            <div className="card-body">
                {/* SUBTOTAL */}
                <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                    <span>subtotal</span>
                    <span className="font-medium">{formatPrice(cartTotal)}</span>
                </p>
                {/* SHIPPING */}
                <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                    <span>shipping</span>
                    <span className="font-medium">{formatPrice(shipping)}</span>
                </p>
                {/* Tax */}
                <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                    <span>tax</span>
                    <span className="font-medium">{formatPrice(tax)}</span>
                </p>
                  {/* Total */}
                  <p className="flex justify-between text-sm mt-4 pb-2">
                    <span>Total</span>
                    <span className="font-medium">{formatPrice(orderTotal)}</span>
                </p>
            </div>
        </div>
    )
}

export default CartTotals