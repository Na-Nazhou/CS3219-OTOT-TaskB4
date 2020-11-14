import React, { useState } from 'react';
import { TextField, Paper, Button, Grid } from '@material-ui/core';

const QuoteTextField = ({ handleSubmit, defaultContent = '', buttonText }) => {
  const [content, setContent] = useState(defaultContent);

  const onClick = () => {
    handleSubmit(content);
  };

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container>
        <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
          <TextField
            placeholder="Type quote here"
            value={content}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid xs={2} md={1} item>
          <Button
            fullWidth
            color="secondary"
            variant="outlined"
            disabled={content === ''}
            onClick={onClick}
          >
            {buttonText}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default QuoteTextField;
