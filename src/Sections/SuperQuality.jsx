import Button from "../Components/Button"
import { shoe8 } from "../assets/images"
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className=" flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl  capitalize lg:max-w-lg font-bold">
          We Provide You <br />
           <span className="text-coral-red "> Super Quality </span>Shoes
        </h2>
        <p className="font-montserrat mt-4 info-text lg:max-w-lg">
          Ensuring Premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="font-montserrat mt-6 info-text lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11 ">
          <Button label="view detail" />
        </div>

      </div>
      <div className="flex  flex-1 justify-center items-center ">
        <img
          src={shoe8}
          alt="shoe8"
          width={576}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality