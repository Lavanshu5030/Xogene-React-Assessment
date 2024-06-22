import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import SpellingSuggestions from '../components/SpellingSuggestions';

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    try {
      // const response = await axios.get(`https://rxnav.nlm.nih.gov/REST/Prescribe/drugs.json?name=${query}`);
      // // const response = await axios.get(`https://rxnav.nlm.nih.gov/REST/Prescribe/spellingsuggestions.json?name=${query}`);
      
      // const conceptGroups = response.data.drugGroup.conceptGroup || [];
      // const results = conceptGroups.flatMap(group => group.conceptProperties || []);
      // if (results.length > 0) {
      //   setSearchResults(results);
      //   setSuggestions([]);
      //   setError(null);
      // } else {
        const suggestionResponse = await axios.get(`https://rxnav.nlm.nih.gov/REST/Prescribe/spellingsuggestions.json?name=${query}`);
        const suggestions = suggestionResponse.data.suggestionGroup.suggestionList.suggestion || [];
        if (suggestions.length > 0) {
          setSuggestions(suggestions);
          setSearchResults([]);
          setError(null);
        } else {
          setError('No results found.');
          setSearchResults([]);
          setSuggestions([]);
        // }
      }
    } catch (error) {
      setError('An error occurred while fetching data.');
      setSearchResults([]);
      setSuggestions([]);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {searchResults.length > 0 && <SearchResults results={searchResults} />}
      {suggestions.length > 0 && <SpellingSuggestions suggestions={suggestions} />}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Home;
