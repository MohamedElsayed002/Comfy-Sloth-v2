import { useSelector } from "react-redux"
import { CartTotals, CheckOutForm, SectionTitle } from "../components"
import { toast } from "react-toastify"
import { redirect } from "react-router-dom"



export const loader = (store) => () => {
    const user = store.getState().userState.user
    if(!user) {
        toast.warn('you must login first')
        return redirect('/login')
    }
    return null
}


const CheckOut = () => {

    const cartTotal = useSelector((state) => state.cartState.cartTotal)
    if (cartTotal === 0) {
        return <SectionTitle text='your cart is empty ' />
    }

    return (
        <>
            <SectionTitle text='place your order' />
            <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
                <CheckOutForm/>
                <CartTotals/>

            </div>
        </>
    )
}


export default CheckOut