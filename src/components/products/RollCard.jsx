import Badge from './Badge.jsx'

function RollCard() {
  const price = 500

  return (
    <article className="card">
      <Badge />
      <h3>Cinnamon Rolls</h3>
      <p className="card-desc">Box of 4, with cream cheese</p>
      <p className="price">Rs {price}</p>
    </article>
  )
}

export default RollCard