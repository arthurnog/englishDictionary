import { Text, useSx, View, H1, P, Row, A } from 'dripsy'
import { useCallback, useEffect, useState } from 'react'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import SearchBar from './searchBar'
import ResultDisplay, { parseResponse, ResultType } from './resultDisplay'
import styles from './styles';

const mockResults : ResultType[] = [
  {word:'abacate', phonetic:'/abacate/'},
  {word:'banana', phonetic:'/banana/'}
];

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
        {searchResults.map(result => <ResultDisplay key={result.word} word={result.word} phonetic={result.phonetic} />)}
      </View>
      <View sx={{ height: 32 }} />
    </View>
  )
}
