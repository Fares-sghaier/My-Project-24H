import React from "react";

var Foodlist = (props) => {
  return (
    <div className="foodlist">
       <div className="eight"><h1>OUR FOOD Gallery</h1></div> 
      <section className="popular" id="popular">
        <h1 class="heading">
          {" "}
           <span></span> {" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <span className="price"></span>
            <img src="https://previews.123rf.com/images/maxpetrov/maxpetrov1810/maxpetrov181000020/109330391-sabrosa-hamburguesa-jugosa-en-una-placa-de-metal.jpg" alt="" />
            <h3>{props.elem}</h3>
            <button href="#" className="bota">
              order now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Foodlist;