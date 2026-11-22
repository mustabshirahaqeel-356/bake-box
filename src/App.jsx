import ShopHeader from './components/layout/ShopHeader.jsx'
import ProductSection from './components/products/ProductSection.jsx'
import ReviewSection from './components/reviews/ReviewSection.jsx'
import OrderInfo from './components/order/OrderInfo.jsx'
import Footer from './components/layout/Footer.jsx'

function App() {
  return (
    <div className="page">
      <ShopHeader />
      <ProductSection />
      <ReviewSection />
      <OrderInfo />
      <Footer />
    </div>
  )
}

export default App