import { BsBag } from 'react-icons/bs';
import logo from '../img/logo.svg';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { useContext , useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {

    const [isActive,setIsActive] = useState(false);
    const { sidebarOpen , setSidebarOpen } = useContext ( SidebarContext );
    const { itemCount } = useContext ( CartContext );

    useEffect(()=>{
    window.addEventListener('scroll',()=>{
        if(window.scrollY > 100){
            setIsActive(true);
        }else{
            setIsActive(false);
        }
    }
    )
    },[])
    return ( <header className={`${isActive?'bg-white  py-4 shadow-md ':'bg-transparent py-6'} fixed top-0 left-0 w-full z-10 transition-all`}>
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                        <Link to="/" className="cursor-pointer">
                            <img src={logo} alt="logo" className='w-10'/>
                        </Link>
                    </div>
                <button className='cursor-pointer flex relative max-w-[50px]'
                        onClick={ () => setSidebarOpen ( ! sidebarOpen ) }>
                    <BsBag className='text-2xl'/>
                    <div
                        className="bg-red-500 absolute -right-2 -top-2 rounded-full text-white text-xs w-5 h-5 flex items-center justify-center">
                        { itemCount }
                    </div>
                </button>
                </div>
            </div>

        </header> );
};

export default Header;
