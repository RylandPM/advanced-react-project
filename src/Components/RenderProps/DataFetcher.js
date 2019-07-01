import React, { Component } from "react";
import axios from "axios";

export default class DataFetcher extends Component {
  constructor() {
    super();
    this.state = {
      products: null
    };
  }

  fetchData = () => {
    axios.get(this.props.url).then(res => {
      console.log(res.data);
      this.setState({
        products: res.data
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.products
          ? this.props.renderDisplay(this.state.products)
          : this.fetchData()}
      </div>
    );
  }
}
