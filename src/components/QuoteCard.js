import React from 'react';
import './QuoteCard.css';


function QuoteCards ({ quotes }) {
    return (
      <figure className="QuoteCard">
        <img src={quotes.image} alt={quotes.character} />
        <figcaption>
          <blockquote>{quotes.quote}</blockquote>
          <p>
            <cite>{quotes.character}</cite>
          </p>
        </figcaption>
      </figure>
    );
  };

export default QuoteCards;