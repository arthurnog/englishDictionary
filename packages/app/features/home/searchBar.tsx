import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from './styles';

const SearchBar = ({ onButtonPress }) => {
  const [searchText, setSearchText] = useState('');

  const handlePress = () => {
    onButtonPress(searchText);
  };

  const handleChange = (text) => {
    setSearchText(text);
  }


  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.input}
        value={searchText}
        onChangeText={handleChange}
        placeholder="Type word"
        placeholderTextColor="#999"
      />
      <Button title="search" onPress={handlePress}/>
    </View>
  );
};

export default SearchBar;