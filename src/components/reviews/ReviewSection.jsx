import ReviewSara from './ReviewSara.jsx'
import ReviewHira from './ReviewHira.jsx'

function ReviewSection() {
  return (
    <section id="reviews" className="section">
      <h2 className="section-title">What students say</h2>
      <div className="reviews">
        <ReviewSara />
        <ReviewHira />
      </div>
    </section>
  )
}

export default ReviewSection