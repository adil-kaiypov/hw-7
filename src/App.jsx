import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Item from './components/Item/Item';
import Nav from './components/Nav/Nav';
import { getProducts, productsSelect } from './redux/slices/productsSlice';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();
  const { products, load } = useSelector(productsSelect);

  useEffect(() => {
    dispatch(getProducts(products));
  }, []);

  console.log(products)

  return (
    <>          
    <Nav/>
      {
        !load
        &&
        <ul>
          {products.map(p => <Item key={p.id} id={p.id} name = {p.name} description = {p.description}/>)}
        </ul>
      }
      {
        load
        &&
        <div class="lds-dual-ring"></div>
      }
    </>
  )
}

export default App
