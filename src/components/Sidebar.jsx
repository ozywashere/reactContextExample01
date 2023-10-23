import { IoMdArrowForward } from 'react-icons/io';
import { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem';
import { FiTrash , FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const { sidebarOpen , handleCloseSidebar } = useContext ( SidebarContext );
    const { cart,clearCart,total,itemCount } = useContext ( CartContext );
    const formatCurrency = ( value ) => {
        return new Intl.NumberFormat ( 'en' , {
            style : 'currency' , currency : 'USD' ,
        } ).format ( value );
    };
    return ( <div
            className={ `${ sidebarOpen ? 'right-0' : '-right-full' } fixed top-0 w-full h-full shadow-xl md:w-[35vw] xl:max-w-[30vw]  transition-all duration-500 px-4 lg:px-[35px] bg-white flex flex-col z-20` }>
            <div className='flex justify-between py-6 border-b'>
                <div className='uppercase text-sm'>Shopping Bag ({itemCount})</div>
                <div className='cursor-pointer w-8 h-8 flex items-center justify-center'>
                    <IoMdArrowForward className='text-2xl' onClick={ ()=>handleCloseSidebar()}/>
                </div>
            </div>
            <div className='flex-1 overflow-y-auto overflow-x-hidden border-b'>
                { cart.map ( ( item ) => {
                    return <CartItem key={ item.id } item={ item }/>;
                } ) }
            </div>
            <div className="mt-auto flex flex-col gap-y-3 py-4 ">
                <div className="flex items-center w-full justify-between ">

                    <div className="uppercase text-xl font-semibold">
                        <span className="mr-2">Total:</span>{formatCurrency(total)}
                    </div>
                    <div className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl" onClick={clearCart}>
                        <FiTrash2/>
                    </div>
                </div>
                <Link to="/" className="bg-primary text-white py-4 text-center  uppercase font-semibold">Checkout</Link>
                <Link to="/" className="bg-transparent text-primary py-4  uppercase font-semibold border border-primary text-center">View Cart</Link>
            </div>
        </div> );
};

export default Sidebar;
