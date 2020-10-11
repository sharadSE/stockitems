import React, { Component } from 'react'
import axios from 'axios'
import FilterableProductTable from './FilterableProductTable'
import './App.css'

export default class APIcall extends Component {
  constructor(props) {
    super(props);
    this.state = { repos: [] };
  }

  componentDidMount() {
    axios.get('https://www.mocky.io/v2/5d529fe12e00005e0081db0f')
      .then(response => this.setState({ repos: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <>
          <FilterableProductTable products={this.state.repos} />,
        </>
    );
  }
}
