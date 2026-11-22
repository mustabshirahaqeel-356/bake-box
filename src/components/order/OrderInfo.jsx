function OrderInfo() {
  const quantity = 5
  const price = 450
  const delivery = 100

  const total = quantity * price + delivery

  return (
    <section id="order" className="section">
      <div className="order-box">
        <h2 className="order-title">Your order</h2>
        <p className="order-line">
          {quantity} x Chocolate Brownies at Rs {price}
        </p>
        <p className="order-line">
          Delivery to your department: Rs {delivery}
        </p>
        <p className="order-total">Total: Rs {total}</p>
      </div>
    </section>
  )
}

export default OrderInfo