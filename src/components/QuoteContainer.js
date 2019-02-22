import React, { Component } from 'react'
import  Quote  from './Quote';
import Button from './Button';

export default class QuoteContainer extends Component {

  state = {
    quote: '',
    author: ''
  }

  componentDidMount() {
    this.newQuoteHandler();
  }
  newQuoteHandler = () => {
		const url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback='
		fetch(url)
      .then(res => res.json())
      .then(data => {
        const regex = /(<([^>]+)>)/ig;
        let temp = data[0]['content'].replace(regex, '');
        this.setState({
          quote: temp,
        author: data[0]['title']})
      })
		// axios.get(url)
		// 	.then(res => {
		// 		console.log(res)
		// 		this.state.quote = res[0].content
		// 		this.state.author = res[0].title
		// })
  }
  render() {
    return (
      <div id="quote-box" >
        <Quote quote={this.state.quote} author={this.state.author} />
        <Button buttonClickHandler={this.newQuoteHandler} id="new-quote" name="new quote" />
        <a href='https://twitter.com/intent/tweet' id="tweet-quote" name="tweet quote" />

      </div>
    )
  }
}
