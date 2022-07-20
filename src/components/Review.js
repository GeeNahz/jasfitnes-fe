import StarRating from './StarRating';


const Review = (props) => {
    return (
        <div className="review">
            <p className='capitalize text-gray-400 text-sm'>{props.reviewCard.title}</p>
            <p className='uppercase font-bold'>{props.reviewCard.name}</p>
            <div className='stars space-x-1 mb-5'>
                <StarRating rate={props.reviewCard.stars} />
            </div>

            <p className='text-mako text-sm'>{props.reviewCard.review}</p>
            <i className="fa fa-quote-right absolute -bottom-2 -right-5 fa-8x opacity-10 -z-10" aria-hidden="true"></i>
        </div>
    );
}
 
export default Review;