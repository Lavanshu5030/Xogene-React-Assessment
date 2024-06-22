import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';

const SearchResults = ({ results }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <List>
        {results.map((result) => (
          <ListItem key={result.rxcui} button component={Link} to={`/drugs/${result.rxcui}`}>
            <ListItemText primary={result.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SearchResults;
