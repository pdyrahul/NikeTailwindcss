import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import { shoes, statistics } from "../constants"
import ShoeCard from "../Components/ShoeCard"
import { useState } from "react"
const Hero = () => {
const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-mon text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-1 font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span><br />
          <span className="text-coral-red inline-block mt-3">Nike</span>Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>
        <Button label="shop now" iconUrl={arrowRight} />
        <div className="flex justify-start w-full items-start flex-wrap gap-16 mt-20 ">
          {statistics.map((stat, index) => (
            <div>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 relative justify-between items-center xl:min-h-screen mx-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImg} alt="shoesHero" height={400} width={510} className="  object-contain relative z-10" />
        <div className=" flex  justify-center left-0 right-0 sm:gap-6 gap-4 absolute bottom-[-8%] max-sm:bottom-[-20%] z-20 sm:left -[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={shoe}>
              <ShoeCard
                imgUrl={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg (shoe)}
                bigShoeImage={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero