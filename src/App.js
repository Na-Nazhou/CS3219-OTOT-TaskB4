import React, { useEffect, useState } from 'react';
import { LinearProgress } from '@material-ui/core';
import QuoteForm from './components/QuoteForm';
import Layout from './components/Layout';
import QuoteList from './components/QuoteList';
import { fetchQuotes, addQuote, editQuote, deleteQuote } from './api';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [quotes, setQuotes] = useState({});

  useEffect(() => {
    fetchQuotes().then((quoteArr) => {
      const quotes = {};
      quoteArr.forEach((quote) => {
        quotes[quote.id] = quote;
      });
      setQuotes(quotes);
      setIsLoading(false);
    });
  }, []);

  const handleAddQuote = (content) => {
    setIsLoading(true);
    return addQuote(content).then((quote) => {
      const copy = Object.assign({}, quotes);
      copy[quote.id] = quote;
      setQuotes(copy);
      setIsLoading(false);
    });
  };

  const handleEditQuote = (id, newContent) => {
    setIsLoading(true);
    return editQuote(id, newContent).then((quote) => {
      const copy = Object.assign({}, quotes);
      copy[id] = {
        id,
        content: quote.content,
      };
      setQuotes(copy);
      setIsLoading(false);
    });
  };

  const handleDeleteQuote = (id) => {
    setIsLoading(true);
    return deleteQuote(id).then(() => {
      const copy = Object.assign({}, quotes);
      delete copy[id];
      setQuotes(copy);
      setIsLoading(false);
    });
  };

  return (
    <Layout>
      {isLoading && <LinearProgress />}
      <QuoteForm handleSubmit={handleAddQuote} buttonText="Add" />
      <QuoteList
        quotes={Object.values(quotes)}
        editQuote={handleEditQuote}
        deleteQuote={handleDeleteQuote}
      />
    </Layout>
  );
}

export default App;
