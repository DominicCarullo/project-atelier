import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './Overview/Overview.jsx';
import RatingsAndReviews from './RatingsAndRevs/RatingsAndReviews.jsx';
import QandA from './QandA/QandA.jsx';
import $ from 'jquery';
import axios from 'axios';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      clickData: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.clickTracker = this.clickTracker.bind(this);
  }

  handleClick(id, name) {
    this.setState({
      'selectedProductId': id,
      'productName': name
    })
  }

  clickTracker (e) {
    console.log('Click Event', e);

  }

  componentDidMount() {
    axios.get('/API')
    .then((res) => {
      return res.data
    })
    .then((productList) => {
      console.log('productList', productList)
      this.setState({
        'productList': productList,
        'defaultProductId': productList[0].id,
        'productName': productList[0].name
      })
    })
  }

  render() {
    if (!this.state.productList) {
      return (
        <div>
          <h1>Project Atelier</h1>
        </div>
      )
    } else {
      var id = this.state.selectedProductId ? this.state.selectedProductId : this.state.defaultProductId
      let name
      if (this.state.productName) {
        name = this.state.productName
      }
      return (
        <div>
          <h1>Project Atelier</h1>
          <h3>Product List</h3>
          <div>
            {this.state.productList.map((product, index) =>
              <li key={index} onClick={(e)=>{this.handleClick(product.id, product.name)}}>{product.name}</li>
            )}
          </div>
          <Overview id={id} clickTracker={this.clickTracker}/>
          <QandA id={id} clickTracker={this.clickTracker}/>
          <RatingsAndReviews id={id} name={name} clickTracker={this.clickTracker}/>
        </div>
      )
    }
  }
}

export default App