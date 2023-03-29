import { Text, useSx, View, H1, P, Row, A } from 'dripsy'
import { useState } from 'react'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import SearchBar from './searchBar'
import styles from './styles';

export function HomeScreen() {
  const sx = useSx()
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = async (searchText: String) => {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`);
    const data = await response.json();
    setSearchResults(data)
    console.log(searchResults)
  };

  return (
    <View
      sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
    >
      <H1 sx={{ fontWeight: '800' }}>English Dictionary</H1>
      <View style={styles.container}>
        <SearchBar onButtonPress={handleSearch} />
      </View>
      <View sx={{ height: 32 }} />
      <Row>
        
      </Row>
    </View>
  )
}
