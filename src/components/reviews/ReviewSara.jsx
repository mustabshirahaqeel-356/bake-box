import Avatar from './Avatar.jsx'
import Rating from './Rating.jsx'

function ReviewSara() {
  return (
    <article className="review">
      <Avatar />
      <div className="review-body">
        <div className="review-top">
          <strong className="reviewer">Sara A.</strong>
          <Rating />
        </div>
        <p className="comment">
          Best brownies on campus. I ordered twice in one week!
        </p>
      </div>
    </article>
  )
}

export default ReviewSara