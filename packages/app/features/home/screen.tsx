import { View, H1 } from 'dripsy'
import { useCallback, useState } from 'react'
import SearchBar from './searchBar'
import ResultDisplay, { parseResponse, ResultType } from './resultDisplay'
import styles from './styles';

export function HomeScreen() {
  const [searchResults, setSearchResults] = useState<ResultType[]>([])

  const handleSearch = useCallback(async (searchText: String) => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`);
      const results = await parseResponse(response);
      setSearchResults(results);
    } catch(e) {
      setSearchResults([]);
    }
  },[]);


  return (
    <View style={styles.container}>
      <H1 sx={{ fontWeight: '800' }}>English Dictionary</H1>
      <View style={styles.container}>
        <SearchBar onButtonPress={handleSearch} />
        {searchResults.map((result) => (
          <ResultDisplay
            key={result.meanings[0]?.definitions[0]?.definition}
            meanings={result.meanings}
            word={result.word}
            phonetic={result.phonetic}
          />))}
      </View>
      <View sx={{ height: 32 }} />
    </View>
  )
}
