import ShopHeader from './components/layout/ShopHeader.jsx'
import ProductSection from './components/products/ProductSection.jsx'
import ReviewSection from './components/reviews/ReviewSection.jsx'

function App() {
  return (
    <div className="page">
      <ShopHeader />
      <ProductSection />
      <ReviewSection />
    </div>
  )
}

export default App