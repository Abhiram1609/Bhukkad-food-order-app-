import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from './HeaderCartButton.module.css';


const HeaderCardButton = (props) => {
    const [btnIsHigh, setBtnIsHigh] = useState(false);
    const carCtx = useContext(CartContext);
    const numberOfCartItems = carCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const { items } = carCtx;

    const btnClasses = `${classes.button} ${btnIsHigh ? classes.bump: ''}`;

    useEffect(() => {
        if(items.length === 0)
        {
            return;
        }
        setBtnIsHigh(true);

        const timer = setTimeout(() => {
            setBtnIsHigh(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCardButton;