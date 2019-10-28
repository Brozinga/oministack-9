import React, { useState, useEffect } from 'react';
import { View, StatusBar, SafeAreaView, Text, Image, AsyncStorage, StyleSheet } from 'react-native';

import logo from '../../assets/logo.png';

import SpotList from '../components/List/spotList';


export default function List() {

    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            const techsArray = storageTechs.split(',').map(tech => tech.trim());
            setTechs(techsArray);
        })
    }, [])

    return (
        <SafeAreaView style={style.container}>
            <Image style={style.logo} source={logo} />
            {techs.map(tech => (<SpotList key={tech} tech={tech}></SpotList>))}
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    logo: {
        height: 42,
        alignSelf: 'center',
        marginTop: 20,
        resizeMode: 'contain'
    }
})
