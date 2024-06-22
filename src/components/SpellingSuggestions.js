import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';

const SpellingSuggestions = ({ suggestions }) => {
  return (
    <div>
      <h2>Did you mean:</h2>
      <List>
        {suggestions.map((suggestion, index) => (
          <ListItem key={index}  component={Link} to={`/drugs/${suggestion}`}>
            <ListItemText primary={suggestion} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SpellingSuggestions;
