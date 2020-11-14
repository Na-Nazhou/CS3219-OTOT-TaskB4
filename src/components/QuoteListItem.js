import React, { useState } from 'react';
import { Paper, IconButton, Grid } from '@material-ui/core';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import EditOutlined from '@material-ui/icons/EditOutlined';
import QuoteTextField from './QuoteTextField';

const QuoteListItem = ({ content, handleDelete, handleEdit }) => {
  const [editMode, setEditMode] = useState(false);

  const onEdit = (newContent) => {
    handleEdit(newContent);
    setEditMode(false);
  };

  if (editMode) {
    return (
      <QuoteTextField
        handleSubmit={onEdit}
        defaultContent={content}
        buttonText="Edit"
      />
    );
  }

  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container alignItems="center">
        <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
          {content}
        </Grid>
        <Grid xs={2} md={1} item>
          <IconButton aria-label="Edit Quote" onClick={() => setEditMode(true)}>
            <EditOutlined />
          </IconButton>
          <IconButton aria-label="Delete Quote" onClick={handleDelete}>
            <DeleteOutlined />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default QuoteListItem;
