import React from 'react';
import QuoteListItem from './QuoteListItem';

const QuoteList = ({ quotes, editQuote, deleteQuote }) => (
  <>
    {quotes.map((quote) => (
      <QuoteListItem
        key={quote.id}
        content={quote.content}
        handleDelete={() => deleteQuote(quote.id)}
        handleEdit={(newwContent) => editQuote(quote.id, newwContent)}
      />
    ))}
  </>
);

export default QuoteList;
