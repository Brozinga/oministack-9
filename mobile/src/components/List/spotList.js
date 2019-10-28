import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import api from '../../services/api'


const spotList = ({ tech }) => {

    const [spots, setSpots] = useState([]);

    useEffect(() => {

        async function getAllDataTechs() {
            const response = await api.get('/spots', {
                params: { tech }
            })

        }

        getAllDataTechs();

    }, []);


    return (
        <View style={style.container}>
            <Text style={style.title}>Empresas que usam </Text><Text style={style.bold}>{tech}</Text>
        </View>
    )
}

export default spotList

const style = StyleSheet.create({
    container: {
        marginTop: 30
    },
    title: {
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15
    },
    bold: {
        fontWeight: 'bold'
    }
})