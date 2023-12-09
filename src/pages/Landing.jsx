
import { useLoaderData } from "react-router-dom"
import { FeaturedProducts, Hero } from "../components"
import { customFetch } from "../utils"


const url = '/products?featured=true'

export const loader = async  () => {
    const response = await customFetch(url)
    const products = response.data.data
    return {products}

}


const Landing = () => {

    const data = useLoaderData()
    console.log(data)

    return (
        <>
            <Hero/>
            <FeaturedProducts/>
            
        </>
    )
}

export default Landing