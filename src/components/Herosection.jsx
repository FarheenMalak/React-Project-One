const HeroSection = () =>{
    return(
     <div className="main">
        <div className="main-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
             <div className="hero-btn">
                <button>Shop Now</button>
                <button className="category-btn">Category</button>
             </div>
             <div className="shopping">
               <p>Also available on:</p>
               <div className="brand-icons">
                  <img src="/images/amazon.png" alt="" />
                  <img src="/images/flipkart.png" alt="" />
               </div>
             </div>
        </div>
        <div className="main-image">
         <img src="/images/shoe_image.png" alt="" />
        </div>
     </div>
    )
}
export default HeroSection;