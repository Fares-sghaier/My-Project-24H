import React from "react";
import axios from "axios";
class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: [],
      name: "",
      email: "",
      feedback: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.reviewget = this.reviewget.bind(this);
  }

  componentDidMount() {
    this.reviewget();
  }

  reviewget() {
    axios.get("/review").then((data) => {
      console.log(data.data, "data comes");
      this.setState({ review: data.data });
    });
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit() {
    var name = this.state.name;
    var email = this.state.email;
    var feedback = this.state.feedback;
    axios
      .post("/post/review", { name: name, email: email, feedback: feedback })
      .then((data) => {
        console.log(data, "postcorrect");
        this.reviewget();
        this.setState({ review: data });
      });
  }
  render() {
    return (
      <div className="container">
        {console.log(this.state.review, "review")}
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
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  onChange={this.handleChange}
                  taken={this.state.name}
                />
                <input
                  name="email"
                  type="src"
                  placeholder="YOU CAN UPLOAD YOUR PHOTO "
                  onChange={this.handleChange}
                  taken={this.state.email}
                />
              </div>
              <textarea
                name="feedback"
                placeholder="Write Your FeedBack Here..."
                id=""
                cols="30"
                rows="10"
                onChange={this.handleChange}
                taken={this.state.feedback}
              ></textarea>
              <input
                type="submit"
                value="submit"
                className="bota"
                onClick={this.handleSubmit}
              />
            </form>
          </div>
          <div className="eleven">
            <h1>WE have {this.state.review.length} Feedback</h1>
          </div>
        </section>
        <div>
          {this.state.review.map((elem, index) => {
            return (
              <div>
                <section className="review" id="review">
                  <h1 className="heading">
                    {" "}
                    OUR COSTUMER <span>REVIEW</span>{" "}
                  </h1>

                  <div className="box-container" key={index}>
                    <div className="box">
                      <img src={elem.email} alt="" />
                      <h3>{elem.name}</h3>
                      <p>{elem.feedback}</p>
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Review;
