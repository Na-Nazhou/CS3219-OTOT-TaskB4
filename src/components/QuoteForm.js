import React, { useState } from 'react';
import { TextField, Paper, Button, Grid } from '@material-ui/core';

const QuoteForm = ({
  handleCancel,
  handleSubmit,
  defaultContent = '',
  isEditMode = false,
}) => {
  const [content, setContent] = useState(defaultContent);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = () => {
    setSubmitting(true);
    handleSubmit(content).then(() => {
      setContent('');
      setSubmitting(false);
    });
  };

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const buttons = () => {
    if (!isEditMode) {
      return (
        <Button
          fullWidth
          color="primary"
          variant="contained"
          disabled={content === '' || submitting}
          onClick={onSubmit}
        >
          Add
        </Button>
      );
    }

    return (
      <Grid container spacing={1}>
        <Grid item>
          <Button
            fullWidth
            color="primary"
            variant="contained"
            disabled={content === '' || submitting}
            onClick={onSubmit}
          >
            Edit
          </Button>
        </Grid>
        <Grid item>
          <Button
            color="secondary"
            variant="contained"
            disabled={submitting}
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    );
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
          {buttons()}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default QuoteForm;
