import Avatar from './Avatar.jsx'
import Rating from './Rating.jsx'

function ReviewHira() {
  return (
    <article className="review">
      <Avatar />
      <div className="review-body">
        <div className="review-top">
          <strong className="reviewer">Hira M.</strong>
          <Rating />
        </div>
        <p className="comment">
          The nankhatai tasted just like my grandmother&apos;s.
        </p>
      </div>
    </article>
  )
}

export default ReviewHira