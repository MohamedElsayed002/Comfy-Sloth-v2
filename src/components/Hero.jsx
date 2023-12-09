
import { Link } from 'react-router-dom'
import Hero1 from '../assets/hero1.jpg'
import Hero2 from '../assets/hero2.jpg'
import Hero3 from '../assets/hero3.jpg'
import Hero4 from '../assets/hero4.jpg'

const carouselImages = [Hero1, Hero2, Hero3, Hero4]

const Hero = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
                <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
                    we are changing the way people shop
                </h1>
                <p className="mt-8 max-w-xl text-lg leading-8">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad velit dignissimos voluptatem, assumenda nam excepturi, rem commodi aspernatur minima, ab numquam neque beatae illum corporis! Aliquam animi nostrum iusto repellendus?
                </p>
                <div className="mt-10">
                    <Link className="btn btn-primary" to="/products">More Products</Link>
                </div>
            </div>
            <div className="hidden lg:carousel h-[28rem] carousel-center p-4 space-x-4 bg-neutral rounded-box">
                {
                    carouselImages.map((item) => {
                        return (
                            <>
                                <div className="carousel-item">
                                    <img src={item} className="rounded-lg h-full" />
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Hero