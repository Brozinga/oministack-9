import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import api from '../../services/api'


const spotList = ({ tech }) => {

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


    return (
        <View style={style.container}>
            <Text style={style.title}>Empresas que usam <Text style={style.bold}>{tech}</Text></Text>
            <FlatList style={style.list}
                data={spots}
                keyExtractor={spot => spot._id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    <View style={style.listItem}>
                        <Image style={style.thumbnail} source={{ uri: item.thumbnail_url }} />
                        <Text style={style.company}>{item.company}</Text>
                        <Text style={style.price}>{item.price ? `R$ ${item.price}/Dia` : 'Gratuito'}</Text>
                        <TouchableOpacity style={style.buttom} onPress={() => { }}>
                            <Text> Text style={style.buttonText}>Solicitação de Reserva</Text>
                        </TouchableOpacity>
                    </View>
                }}
            ></FlatList >
        </View >
    )
}

export default spotList

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
    thumbnail: {

    }
})