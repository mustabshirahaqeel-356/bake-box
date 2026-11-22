import BrownieCard from './BrownieCard.jsx'
import NankhataiCard from './NankhataiCard.jsx'
import RollCard from './RollCard.jsx'

function ProductSection() {
  return (
    <section id="shop" className="section">
      <h2 className="section-title">Fresh from the oven</h2>
      <div className="cards">
        <BrownieCard />
        <NankhataiCard />
        <RollCard />
      </div>
    </section>
  )
}

export default ProductSection