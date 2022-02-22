
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug - card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

      <ProductCard product={ product }>
        <ProductCard.Image className="custom-image" />
        <ProductCard.Title title={ 'xD' } className="text-bold" activeTitleClass="active" />
        <ProductCard.Buttons />
      </ProductCard>

      <ProductCard 
        product={ product }
        className="bg-dark text-white"
      >
        <ProductImage className="custom-image" />
        <ProductTitle className="text-bold" activeTitleClass="active" />
        <ProductButtons className="custom-buttons" />
      </ProductCard>

      <ProductCard 
        product={ product }
        style={{
          backgroundColor: '#70D1f8'
        }}
      >
        <ProductImage />
        <ProductTitle style={{
          fontWeight: 'bold'
        }}/>
        <ProductButtons style={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}/>
      </ProductCard>

      </div>
    </div>
  )
}
