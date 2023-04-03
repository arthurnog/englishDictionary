import { H1 } from 'dripsy';
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import MeaningsDisplay, { MeaningType } from './meaningsDisplay';

export interface ResultType {
    word: string;
    phonetic: string;
    meanings: MeaningType[];
}


export const parseResponse = async (response : any) : Promise<ResultType[]> => {
    
    if (!response){
        throw new Error('Invalid response');
    }
    
    const data = await response.json() as any[];

    const parsedResult: ResultType[] = data.map(element => {
        return {
            word: element.word ?? '',
            phonetic: element.phonetic ?? '',
            meanings: element.meanings ?? []
        }
    });

    return parsedResult;
}

const ResultDisplay: React.FC<ResultType> = ({word, phonetic, meanings}) => {
    return (
        <View style={styles.container}>
            <H1>{word}</H1>
            <Text>{phonetic}</Text>
            {meanings.map(result => <MeaningsDisplay partOfSpeech={result.partOfSpeech} definitions={result.definitions} synonyms={result.synonyms} antonyms={result.antonyms} />)}
        </View>
    )};

export default ResultDisplay;