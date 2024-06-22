import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <TextField
        label="Search for a drug"
        variant="outlined"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        style={{ marginRight: '8px' }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        🔍
      </Button>
    </div>
  );
};

export default SearchBar;
