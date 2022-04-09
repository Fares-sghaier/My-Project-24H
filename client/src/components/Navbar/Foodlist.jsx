 import React from "react";
 import data from "../../listdata.js";

class Foodlist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    data:data
    }
  }
  render(){
    return(
      <div className="foodlist">
        <div className="eight"><h1>OUR FOOD LIST</h1></div> 
       <section className="popular" id="popular">
         <h1 class="heading">
           {" "}
            <span></span> {" "}
         </h1>
         {this.state.data.map((elem,index)=>{
           return (
            <div className="box-container" key={index}>
            <div className="box">
              <span className="price">{elem.price}</span>
              <img src={elem.image} alt="" />
              <h3>{elem.name}</h3>
              <button href="#" className="bota">
                order now
              </button>
            </div>
          </div>
           )
         })}
       </section>
     </div>
    )
  }
}
 export default Foodlist;