import React, { useEffect, useState } from 'react';
import QuoteTextField from './components/QuoteTextField';
import Layout from './components/Layout';
import QuoteList from './components/QuoteList';

function App() {
  const [quotes, setQuotes] = useState([]);

  // TODO: Link up backend
  useEffect(() => {
    setQuotes([
      {
        id: 1,
        content: 'Test',
      },
    ]);
  }, []);

  return (
    <Layout>
      <QuoteTextField
        handleSubmit={(content) => console.log(`Add quote ${content}`)}
        buttonText="Add"
      />
      <QuoteList
        quotes={quotes}
        editQuote={(id, newContent) =>
          console.log(`Edit quote ${id} ${newContent}`)
        }
        deleteQuote={(id) => console.log(`Delete quote ${id}`)}
      />
    </Layout>
  );
}

export default App;
