import { H1 } from 'dripsy';
import React, { useState, useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export interface ResultType {
    word: string;
    phonetic: string;
}


export const parseResponse = async (response : any) : Promise<ResultType[]> => {
    
    if (!response){
        throw new Error('Invalid response');
    }
    
    const data = await response.json() as any[];

    const parsedResult: ResultType[] = data.map(element => {
        return {
            word: element.word ?? '',
            phonetic: element.phonetic ?? ''
        }
    });

    return parsedResult;
}

const ResultDisplay: React.FC<ResultType> = ({word, phonetic}) => {
    return (
        <View style={styles.container}>
            <H1>{word}</H1>
            <Text>{phonetic}</Text>
        </View>
    )};

export default ResultDisplay;