import { reviews } from "../constants";
import ReviewCard from "../Components/ReviewCard";
const CustomerReviews=()=>{
   return (
<section  className="max-container">
<h3 className="font-palanquin text-4xl capitalize text-center font-bold w-full">
    What Our <span className="text-coral-red ">Customer</span> Say?
</h3>
<p className="m-auto mt-4 text-xl max-w-lg text-center">Hear genuine stories from our satisfied customers about their exceptional experience with us</p>
<div className="flex flex-1 mt-24 justify-evenly max-lg:flex-col gap-14 ">
{reviews.map((review)=>(<ReviewCard
    key={review.customerName}
    imgURL={review.imgURL}
    customerName={review.customerName}
    rating={review.rating}
    feedback={review.feedback}
    
    />))}
</div>
</section>
)
}
export default CustomerReviews;