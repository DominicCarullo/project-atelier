import React from 'react'
import Review from './review.jsx'
import WriteReview from './writeReview.jsx'

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numToShow: 2,
      showingAll: false,
      showWriteReview: false
    }
  }

  componentDidMount() {
    if (this.props.reviews) {
      if (this.state.numToShow >= this.props.reviews.length) {
        this.setState({
          showingAll: true
        })
      }
    }
  }

  changeSort(e) {
    this.props.changeSort(e.target.value)
  }

  showMore() {
    let reviews = this.props.reviews
    if (reviews.length > this.state.numToShow + 2) {
      let numToShow = this.state.numToShow + 2
      this.setState({
        numToShow: numToShow
      })
    } else {
      this.setState({
        numToShow: reviews.length,
        showingAll: true})
    }
  }

  render() {
    let reviews = this.props.reviews
    let showWriteReview = this.state.showWriteReview
    if (!reviews) {
      return (
        <div>
          <WriteReview
          id={this.props.product}
          name={this.props.name}
          metadata={this.props.metadata}
          postNewReview={this.props.postNewReview} />
        </div>
      )
    }
    return (
      <div id="reviews" data-testid="reviews">
        <h4>{reviews.length} reviews. Sort by:</h4>
        <select name="review-sort-options" id="review-sort-options" onChange={this.changeSort.bind(this)}>
          <option value="relevance">Relevant</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
        </select>
        <div id="reviews-scroll">
          {reviews.slice(0, this.state.numToShow).map(review =>
            <Review
            review={review}
            key={review.review_id}
            markHelpful={this.props.markHelpful}/>
          )}
        </div>
        {(this.state.numToShow <= reviews.length) &&
        <button className="more-reviews-button" onClick={this.showMore.bind(this)}>More Reviews</button>}
        <WriteReview
        id={this.props.product}
        name={this.props.name}
        metadata={this.props.metadata}
        postNewReview={this.props.postNewReview} />
      </div>
    )
  }
}

export default Reviews