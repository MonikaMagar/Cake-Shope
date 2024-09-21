import "./Home.css"

const Homes =() => {
    return(
        <>
         <div className="container">
      <img src="background.jpg" alt="background" className="image" />
     
      <h1 className="text">Yummy Sweeties Delivered to your dining table!</h1>
      
      <button className="btn">Order now.. </button>
    </div>
  
    <div id="card1">
        <div id="card2"><img src="icon1.png" alt="" />
        <h5 class="mb-0">Baked With Care</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div id="card2"><img src="icon2.png" alt="" />
        <h5 class="mb-0">Flavor Oriented</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        
        </div>
        <div id="card2"><img src="icon3.png" alt="" />
        <h5 class="mb-0">Signature Smoothness</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        
        </div>

    </div>
       

    <section id="bg">
        <h2>𝕋𝕙𝕚𝕤 𝕎𝕖𝕖𝕜’𝕤 𝕊𝕡𝕖𝕔𝕚𝕒𝕝𝕤</h2>
        <p>Try our most popular signature cupcakes and taste the difference!</p>

    <div id="card3">
        <div id="card4"><img src="cake1.png" alt="" />
        <h5 class="mb-0">Rainbow Mixed Flavors</h5>
        <h2 style={{color:'chocolate'}}>12$</h2>
        <button className="Btn">ORDER THIS</button>
        
        </div>
        <div id="card4"><img src="cake2.png" alt="" />
        <h5 class="mb-0">Sweet Couple Tiramisu</h5>
        <h2 style={{color:'chocolate'}}>10$</h2>
        <button className="Btn">ORDER THIS</button>
        
        
        </div>
        <div id="card4"><img src="cake3.png" alt="" />
        <h5 class="mb-0">Pinky Cream Cherry Milk</h5>
        <h2 style={{color:'chocolate'}}>30$</h2>
        <button className="Btn">ORDER THIS</button>
        
        
        </div>
        

    </div>
 <div id="card3"> 
    <div id="card4"><img src="cake4.png" alt="" />
        <h5 class="mb-0">Rainbow Mixed Flavors</h5>
        <h2 style={{color:'chocolate'}}>40$</h2>
        <button className="Btn">ORDER THIS</button>
        </div>
        <div id="card4" ><img src="cake5.jpg" alt="" />
        <h5 class="mb-0">Chocolate</h5>
        <h2 style={{color:'chocolate'}}>20$</h2>
        <button className="Btn">ORDER THIS</button>
        
        </div>
        <div id="card4"><img src="cake6.jpg" alt="" />
        <h5 class="mb-0">Fruits cake</h5>
        <h2 style={{color:'chocolate'}}>25$</h2>
        <button className="Btn">ORDER THIS</button>
       
        
        </div>
        </div>
</section>

<section className="blog">
    <div className="man">
        <img src="man.png" alt="" />
       
        
        <h2>Fast & Free delivery</h2>
       
    </div>


</section>
        </>

    )
}

export default Homes;