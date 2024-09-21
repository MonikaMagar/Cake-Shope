import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../compents/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Cake Shop</h4>
          <p>Cake shop
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Quis ipsum suspendisse ultrices gravida. lacus vel facilisi</p>
          {/* <ul>
            <li><a href="/jerseys">Jerseys</a></li>
            <li><a href="/shoes">Basketball & Football Shoes</a></li>
            <li><a href="/instruments">Sports Instruments</a></li>
          </ul> */}
        </div>

        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="/shipping">Shipping Info</a></li>
            <li><a href="/returns">Returns & Exchanges</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <button style={{backgroundColor:'#fd5be2', fontSize:'20px', borderRadius:'20px',color:'white'}}>Buy Now</button>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
          </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: support@sportsgear.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Sports Ave, City, Country</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p style={{color:'#fd5be2'}}>&copy; 2024 &copy Sports Gear Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;