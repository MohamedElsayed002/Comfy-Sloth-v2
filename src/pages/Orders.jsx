import { redirect, useLoaderData } from "react-router-dom"
import { toast } from 'react-toastify'
import { customFetch } from "../utils"
import { OrdersList, PaginationComplex, SectionTitle } from "../components"


export const loader = (store) => async  ({ request }) => {
    const user = store.getState().userState.user
    if (!user) {
        toast.warn('you must logged in to view orders')
        return redirect('/login')
    }
    const params = Object.fromEntries([... new URL(request.url).searchParams.entries()])
    try {
        const response = await customFetch.get('/orders', {
            params, headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
        return { orders: response.data.data, meta: response.data.meta }

    } catch (error) {
        const errorMessage = error?.response?.data?.error?.message || 'there was an error to fetch orders'
        toast.error(errorMessage)
        if (error.response.status === 401) return redirect('/login')
        return null
    }
}


const Orders = () => {

    const { meta } = useLoaderData()
    if (meta.pagination.total < 1) {
        return <SectionTitle text='please make an order' />
    }

    return (
        <>
            <SectionTitle text='your orders' />
            <OrdersList/>
            <PaginationComplex/>

        </>
    )
}

export default Orders