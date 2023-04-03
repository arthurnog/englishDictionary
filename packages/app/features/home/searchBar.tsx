import { Row } from 'dripsy';
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from './styles';

interface SearchBarProps {
  onButtonPress: (searchText: String) => void;
}

const SearchBar: React.FC<SearchBarProps> = ( {onButtonPress} ) => {
  const [searchText, setSearchText] = useState('');

  const handlePress = () => {
    onButtonPress(searchText);
  };

  const handleChange = (text) => {
    setSearchText(text);
  }


  return (
    <View style={styles.searchBar}>
      <Row>
        <TextInput
          style={styles.input}
          value={searchText}
          onChangeText={handleChange}
          placeholder="Type word"
          placeholderTextColor="#999"
        />
        <Button title="search" onPress={handlePress} />
      </Row>
    </View>
  );
};

export default SearchBar;