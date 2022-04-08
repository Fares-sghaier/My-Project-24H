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
  }

  componentDidMount() {
    this.reviewget();
  }

  reviewget() {
    axios.get("/review").then((data) => {
      console.log({ data }, "data comes");
      this.setState({ review: data });
    });
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    var name = this.state.name;
    var email = this.state.email;
    var feedback = this.state.feedback;
    axios
      .post("/post/review", { name: name, email: email, feedback: feedback })
      .then((data) => {
        console.log(data, "postcorrect");
        this.setState({ review: data });
      });
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
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  onChange={this.handleChange}
                  taken={this.state.name}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="email"
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
        </section>
      </div>
    );
  }
}

export default Review;
