import React from 'react';
import axios from 'axios';
import QuoteCards from './components/QuoteCard'
import './App.css';

const sampleQuote = [
  {
    image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
    quote: "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    character: 'Homer Simpson',
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: sampleQuote[0]
    };
    this.getQuote = this.getQuote.bind(this);
  }


  getQuote() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          quotes: data[0],
        });
    });
  }

  
  render() {
    return (
      <div className="App">
        <QuoteCards quotes={this.state.quotes} />
        <button type="button" onClick={this.getQuote}>Get quote</button>
      </div>
    );
  }
}

export default App;
