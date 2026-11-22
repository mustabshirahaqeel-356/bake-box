import Badge from './Badge.jsx'

function BrownieCard() {
  const price = 450

  return (
    <article className="card">
      <Badge />
      <h3>Chocolate Brownies</h3>
      <p className="card-desc">Box of 6, fudgy and warm</p>
      <p className="price">Rs {price}</p>
    </article>
  )
}

export default BrownieCard