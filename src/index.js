import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader"

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error:{this.state.errorMessage}</div>;
    }
    if (!this.state.lat && !this.state.errorMessage) {
      return <Loader text={"Please Allow Location Request to continue"}/>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
