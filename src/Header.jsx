import React, { useState,useEffect } from "react";
function Header() {

    const items = ["Software Developer", "Web Developer", "Data Analyst", "Content Creator"];
    const [currentIndex, setCurrentIndex] = useState(0); 

    useEffect(() => {
      const interval = setInterval( () => {

        setCurrentIndex((prevIndex)=>(prevIndex + 1) % items.length);
        
      }, 7000);
  
      return () => clearInterval(interval);
    }, [items.length]);

    return(

    <section className="header" id="home">
        <div className="head-con">
            <h2 class="name">Naveen Veera</h2>
            <div class="text">
                <span>I'm</span>
                <span class="tran">{items[currentIndex]}...</span>
            </div>
        </div>
    </section>
)
}
export default Header;