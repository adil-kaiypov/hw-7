import { useSelector } from 'react-redux';
import classes from './nav.module.css'
import { basketItemCount} from '../../redux/slices/basketSlice';

const Nav = () =>{

    const count = useSelector(basketItemCount)

    return(
        <nav>
            <img src = 'https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png'  alt="" />
            <div className={classes.space}></div>
            {
               <h2>{count}</h2> 
            }
        </nav>
    )
}

export default Nav;