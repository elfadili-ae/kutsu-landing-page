import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { statistics, shoes } from "../constants"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"

const Hero = () => {
    const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);
    return (
        <section
            id="home"
            className="
            w-full flex xl:flex-row flex-col
            gap-10 justify-center max-container
            min-h-screen
             ">
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start
            max-lg:padding-x pt-28">
                <p className="font-sans text-xl text-amber-800">Our Winter Collection</p>
                <h1 className="pt-10 font-palanquin text-8xl max-sm:text-[72px]
                ms:leading-[80] font-bold xl:bg-white xl:whitespace-nowrap z-10 pr-10 relative">
                    <span className="text-orange-500">Kutsu</span> New Arrivals</h1>
                <p className="font-montserrat text-amber-800 mt-6 mb-14 text-lg
                sm:max-w-sm
                ">
                    Your new pair of Stylish and high quality shoes is just moments away.</p>
                <Button label="Shop Now" iconURL={arrowRight} />
                <div className="flex justify-start items-start pt-20 w-full gap-16 flex-wrap">
                    {statistics.map((item, index) => (
                        <div className="text-center">
                            <p className="text-4xl font-bold">{item.value}</p>
                            <p className="text-slate-gray leading-7">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative flex-1 flex
             justify-center items-center xl:min-h-screen max-xl:py-40
             bg-primary bg-hero bg-center ">
                <img
                    className="object-contain relative z-10"
                    src={bigShoeImg}
                    alt="Shoe collection"
                    width={500}
                    header={500}
                />
                <div className="flex gap-4 absolute -bottom-[5%] sm:gap-6">
                    {shoes.map((shoe) => (
                        <div key={shoe}>
                            <ShoeCard
                                imgURL={shoe}
                                changeBigShoeImg={(shoe) => { setbigShoeImg(shoe) }}
                                bigShoeImg={bigShoeImg} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero