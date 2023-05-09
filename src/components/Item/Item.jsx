import { useDispatch } from 'react-redux';
import classes from './item.module.css';
import { addItem } from '../../redux/slices/basketSlice';


const Item = ({name, description, id}) =>{

    const dispatch = useDispatch();

    const addProduct = () =>{
        console.log("Button pressed")
        dispatch(addItem(id))
    };

    return(
       <div className={classes.item}>
            <h2>{name}</h2>
            <p>{description}</p>
            <button onClick={addProduct}>Add To Cart</button> 
       </div>
    );
};

export default Item;