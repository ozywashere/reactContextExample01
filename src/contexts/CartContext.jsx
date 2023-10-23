import { createContext , useEffect , useState } from 'react';

export const CartContext = createContext ();

const CartProvider = ( { children } ) => {
    const [ cart , setCart ] = useState ( [] );
    const [ itemCount , setItemCount ] = useState ( 0 );
    const [ total , setTotal ] = useState ( 0 );
    //set total
    useEffect ( () => {
        if ( cart ) {
            const total = cart.reduce ( ( total , item ) => {
                return total + item.amount * item.price;
            } , 0 )
            setTotal ( total );
        }
    }, [ cart ] )
    //set item count
    useEffect ( () => {
        if ( cart ) {
            const amount = cart.reduce ( ( total , item ) => {
                return total + item.amount
            } , 0 )
            setItemCount ( amount );
        }
    } , [ cart ] )
    const addToCart = ( product , id ) => {
        const newItem = { ... product , amount : 1 };
        const cartItem = cart.find ( ( item ) => item.id === id );
        //if cart item is already in cart
        if ( cartItem ) {
            const newCart = [ ... cart ].map ( ( item ) => {
                if ( item.id === id ) {
                    return { ... item , amount : item.amount + 1 };
                } else {
                    return item;
                }
            } );
            setCart ( newCart );
        } else {
            setCart ( [ ... cart , newItem ] );
        }
    };

    const removeFromCart = ( id ) => {
        const newCart = [ ... cart ].filter ( ( item ) => item.id !== id );
        setCart ( newCart );
    }

    const clearCart = () => {
        setCart ( [] );
    }

    const increaseAmount = ( id ) => {
        const cartItem = cart.find ( ( item ) => item.id === id );
        addToCart ( cartItem , id )

    }
    const decreaseAmount = ( id ) => {
        const cartItem = cart.find ( ( item ) => item.id === id );
        if ( cartItem ) {
            const newCart = [ ... cart ].map ( ( item ) => {
                if ( item.id === id ) {
                    return { ... item , amount : item.amount - 1 }
                } else {
                    return item;
                }
            } )
            setCart ( newCart );
        }
        if ( cartItem.amount === 1 ) {
            removeFromCart ( id );
        }
    }
    return <CartContext.Provider value={ {
        cart , addToCart , removeFromCart , clearCart , decreaseAmount , increaseAmount , itemCount , setItemCount,total
    } }>{ children }</CartContext.Provider>;
}


export default CartProvider;
