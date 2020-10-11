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
        {/* <div class="wrap">
          <div class="search">
            <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
              <button type="submit" class="searchButton">
                <i class="fa fa-search"></i>
              </button>
              
          </div>
          <p>
          <input type="checkbox" />
          {' '}Only show products in stock
        </p>
        </div>
        
          <table>
            <tr>
              <th>Category</th>
              <th>Name</th>
              <th>Stocked</th>
              <th>Price</th>
            </tr>
            {this.state.repos.map(repo =>
              <tr>
                <td>{repo.category}</td>
                <td>{repo.name}</td>
                <td>{repo.stocked ? "True" : "false"}</td>
                <td>{repo.price}</td>
              </tr>
            )}
          </table> */}
          <FilterableProductTable products={this.state.repos} />,
        </>
    );
  }
}
