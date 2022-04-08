import React from "react";

export default function Foodlist() {
  return (
    <div className="foodlist">
       <div className="eight"><h1>OUR FOOD LIST</h1></div> 
      <section class="popular" id="popular">
        <h1 class="heading">
          {" "}
           <span></span> {" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <span className="price"> $5 - $20 </span>
            <img src="https://previews.123rf.com/images/maxpetrov/maxpetrov1810/maxpetrov181000020/109330391-sabrosa-hamburguesa-jugosa-en-una-placa-de-metal.jpg" alt="" />
            <h3>tasty burger</h3>
            <button href="#" className="bota">
              order now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
