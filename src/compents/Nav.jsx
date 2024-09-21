import { Link } from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

import './Nav.css'


const Nav=()=>{
    return(

        <>
        <nav id="nav" style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'center'}}>
           {/* <img id="logo" src="L.jpg" alt="logo" /> */}
           <h2 id="logo" >𝕾𝖜𝖊𝖊𝖙 𝖇𝖊𝖈𝖆𝖗𝖞</h2>
            {/* <p  style={{fontFamily:'Lobster', fontSize:'1.5rem'}}>Cake Bekary</p> */}
            <ul style={{width:'80%',fontSize:'1.5rem', display:'flex',flexDirection:'row',fontFamily:'revert-layer',justifyContent:'space-evenly',listStyle:'none',cursor:'pointer'}}>
                <Link style={{textDecoration:'none',color:'black',padding:'0.5rem'}} to={'/'}><li>Home</li> </Link>
                <Link style={{textDecoration:'none',color:'black',padding:'0.5rem'}} to={'/expolar'}> <li>Expolre</li></Link>
                <Link style={{textDecoration:'none',color:'black',padding:'0.5rem'}} to={'/about'}><li>About us</li></Link>
                <Link style={{textDecoration:'none',color:'black',padding:'0.5rem'}} to={'/contacts'}><li>Contact us</li></Link>
                <button id="btn">BUY NOW</button>
                <Link style={{textDecoration:'none',color:'black',padding:'0.5rem'}} to={'/contacts'}><li className="LC"><IoIosContact />Login</li></Link>
                <Link style={{textDecoration:'none',color:'black',padding:'0.5rem'}} to={'/contacts'}><li className="LC"><FaCartShopping />Cart</li></Link>


            </ul>

            
        </nav>
        
        
        
        </>
    )
}

export default Nav;
