function NankhataiCard() {
  const price = 350

  return (
    <article className="card">
      <span className="badge badge-new">New</span>
      <h3>Nankhatai Box</h3>
      <p className="card-desc">Box of 12, cardamom flavour</p>
      <p className="price">Rs {price}</p>
    </article>
  )
}

export default NankhataiCard