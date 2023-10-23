import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoMdAdd , IoMdClose , IoMdRemove } from 'react-icons/io';
import { CartContext } from "../contexts/CartContext.jsx";
import { useContext } from "react";
const CartItem = ( { item } ) => {
    const {removeFromCart,increaseAmount,decreaseAmount } = useContext ( CartContext );
    const { id , title , image , price , amount } = item;
    const formatCurrency = ( value ) => {
        return new Intl.NumberFormat ( 'en' , {
            style : 'currency' , currency : 'USD' ,
        } ).format ( value );
    };
    return ( <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light '>
        <div className='w-full min-h-[150px] flex items-center gap-x-4'>
            {/* image */ }
            <Link to={ `/product/${ id }` }>
                <img src={ image } alt={ title } className='w-20 max-w-full'/>
            </Link>
            <div className="w-full flex flex-col">
                <div className="flex justify-between mb-2">
                    <Link to={ `/product/${ id }` }
                          className='text-sm uppercase font-medium max-w[240px] text-primary hover:underline'>
                        { title }
                    </Link>
                    {/* Remove Icon */ }
                    <div className='text-xl cursor-pointer' onClick={()=>removeFromCart(id)}>
                        <IoMdClose className='text-gray-500 hover:text-red-500 transition'/>
                    </div>
                </div>
                {/*Qty*/ }
                <div className="flex gap-x-2 h-9 text-sm ">
                    <div className="flex flex-1  max-w-[100px] items-center h-full  font-medium border">

                        <div className="flex-1 flex justify-center items-center cursor-pointer h-full" onClick={
                            ()=>decreaseAmount(id)
                        }>
                            <IoMdRemove/>
                        </div>
                        <div className="h-full flex justify-center items-center px-2">
                            { amount }
                        </div>
                        <div className="flex-1 flex justify-center items-center cursor-pointer " onClick={
                            ()=>increaseAmount(id)
                        }>
                            <IoMdAdd/>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-around">
                        { formatCurrency ( price ) }
                    </div>
                    <div className="flex-1 flex justify-end items-center text-primary  font-medium">
                        { formatCurrency ( price * amount ) }
                    </div>
                </div>
            </div>

        </div>
    </div> );
};
CartItem.propTypes = {
    item : PropTypes.object.isRequired ,
};

export default CartItem;
