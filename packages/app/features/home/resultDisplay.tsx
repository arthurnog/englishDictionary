import React, { useState, useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';


const ResultDisplay = useCallback(async (searchText: String) => {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`);
    const data = await response.json();
    console.log(data);
    return (
        <View>
            <Text>{data ? JSON.stringify(data) : 'loading...'}</Text>
        </View>
    );},
    []);

export default ResultDisplay;