
import Button from "../Components/Button"
const Subscribe = () => {
  return (
    <section 
    id="contact-us" className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl max-sm:text-center  leading-[68px] lg:max-w-lg font-palanquin font-bold">
        Sign Up from <br /><span className="text-coral-red"> Upadtes </span>& Newslatter
      </h3>
      <div className=" shadow-md lg:max-w[40%] flex items-center  max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate rounded-full" >
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="input "
        />
        <div className="flex max-sm:justify-end max-sm:w-full  items-center ">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>

    </section>
  )
}

export default Subscribe