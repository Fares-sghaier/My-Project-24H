import React from "react";

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }
  render() {
    return (
      <div className="container">
        <section className="order" id="order">
          <div className="row">
            <div className="image">
              <img
                src="https://thumbs.dreamstime.com/b/food-review-client-experiences-concept-happy-customer-using-catchup-sauce-giving-positive-finish-meal-cafe-149257471.jpg"
                alt=""
              />
            </div>
            <form action="">
              <h1 className="heading"> Give Your FeedBack </h1>
              <div className="inputBox">
                <input type="text" placeholder="name" />
                <input type="email" placeholder="email" />
              </div>
              <textarea
                placeholder="Write Your FeedBack Here..."
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <input type="submit" value="Submit" className="bota" />
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Review;
