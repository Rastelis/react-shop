import './App.css'
import Item from './components/item/Item';
import data from './assets/product-data/products'

function App() {
  return (
    <>
      <div className="container">
        {data.products.map((product, index) => 
          <Item key={index} item={product} />
        )}
      </div>
    </>
  )
}

export default App
