import "./Homes.jsx"
import "./contact.css"
import { HiOutlineMailOpen } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
const Contacts =() => {
    return(
        <>
        
               
        <h3 style={{textAlign:'center',fontSize:'50px',marginBottom:'20px'}}>Contact</h3>
        <div id="card"> 
        <div className="CD">
        <div style={{fontSize:'60px',color:'#fd5be2'}}>
        <HiOutlineMailOpen />
        </div>

            <h3 >Email</h3>
            <p>cake29@gmail.com
            <br />support@dummy.com</p>
         </div>
        <div className="CD">
        <div style={{fontSize:'60px',color:'#fd5be2'}}>
        <CiLocationOn />
        </div>

            <h3>Address</h3>
            <p>Shop 5, Plot 7, Road 18,<br /> Prajelapati Cascade Building, Sector 1,
             </p>
            
         </div>
        <div className="CD">
            <div style={{fontSize:'60px',color:'#fd5be2'}}>
            <IoCallOutline />
            </div>
        
        <h3>Phone</h3>
        <p >091672 05353         </p>
            
         </div>        
         </div>
        

         {/* Contact Us */}
         
         <section className="contact">
         <form>
         <h2>Contact Us</h2>
         <div className="input-box">
         <label>Full Name</label>
         <input type="text" className="field" placeholder='Enter your name' required />
         </div>
         <div className="input-box"> 
         <label>Email Address</label>
         <input type="email" className="field" placeholder='Enter your email' required />
         </div>
         <div className="input-box">
         <label>Your Message</label>
         <textarea name="" id="" className="field mess" placeholder='Enter your message' required></textarea>
         </div>
         <button type="submit">Send Message</button>
         </form>
         </section>

         
         
        </>

    )
}

export default Contacts;