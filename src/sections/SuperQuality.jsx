import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
    return (
        <section className="flex justify-between items-center
        max-lg:flex-col gap-10 w-full max-container">
            <div className="flex flex-1 flex-col">
                <h2 className="pt-10 font-palanquin capitalize text-4xl lg:max-w-lg">
                    we provide you <span className="text-orange-500">super </span>
                    <span className="text-orange-500">
                        Quality </span>
                    Shoes
                </h2>
                <p className=" mt-4 mb-14 lg:max-w-lg info-text">
                    Creating stylish and comfortable footwear, our carefully
                    crafted designs elevate your experience, offering top-notch quality,
                    innovation, and a hint of elegance.
                </p>
                <div>
                    <Button label="Shop Now" iconURL={arrowRight} />
                </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
                <img src={shoe8} alt="shoe" />
            </div>
        </section>
    )
}

export default SuperQuality