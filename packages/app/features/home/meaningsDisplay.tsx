import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export interface DefinitionType {
    definition: string;
    synonyms: string[];
    antonyms: string[];
}

export interface MeaningType {
    partOfSpeech: string;
    definitions: DefinitionType[];
    synonyms: string[];
    antonyms: string[];
}

const MeaningsDisplay: React.FC<MeaningType> = ({partOfSpeech, definitions, synonyms, antonyms}) => {
    return (
        <View style = {styles.container}>
            <Text>Meanings:</Text>
            <Text>{partOfSpeech}</Text>
            <Text>Definitions:</Text>
            {definitions.map(result => <Text key={result.definition}>{result.definition}</Text>)}
            <Text>Synonyms:</Text>
            {synonyms.map(result => <Text key={result}>{result}</Text>)}
            <Text>Antonyms:</Text>
            {antonyms.map(result => <Text key={result}>{result}</Text>)}
        </View>
    )
};

export default MeaningsDisplay;