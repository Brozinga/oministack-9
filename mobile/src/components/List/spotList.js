import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import api from '../../services/api'
import { withNavigation } from 'react-navigation'
const spotList = ({ navigation, tech }) => {

    const [spots, setSpots] = useState([]);

    useEffect(() => {

        async function getAllDataTechs() {
            const response = await api.get('/spots', {
                params: { tech }
            })
            console.log(response.data);

            setSpots(response.data)
        }

        getAllDataTechs();

    }, []);

    function handleNavigate(id) {
        navigation.navigate('Book', { id });
    }


    return (
        <View style={style.container}>
            <Text style={style.title}>Empresas que usam <Text style={style.bold}>{tech}</Text></Text>
            <FlatList style={style.list}
                data={spots}
                keyExtractor={spot => spot._id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={style.listItem}>
                        <Image style={style.thumbnail} source={{ uri: item.thumbnail_url }} />
                        <Text style={style.company}>{item.company}</Text>
                        <Text style={style.price}>{item.price ? `R$ ${item.price}/Dia` : 'Gratuito'}</Text>
                        <TouchableOpacity style={style.button} onPress={() => handleNavigate(item._id)}>
                            <Text style={style.buttonText}>Solicitação de Reserva</Text>
                        </TouchableOpacity>
                    </View>
                )}
            ></FlatList >
        </View >
    )
}


const style = StyleSheet.create({
    container: {
        marginTop: 30
    },
    title: {
        fontSize: 17,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15
    },
    bold: {
        fontWeight: 'bold'
    },

    list: {
        paddingHorizontal: 20,
    },
    listItem: {
        marginRight: 15,
    },
    thumbnail: {
        width: 200,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 2
    },
    company: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10
    },
    price: {
        fontSize: 14,
        color: '#999',
        marginTop: 5
    },

    button: {
        height: 32,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 15
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
})


export default withNavigation(spotList);