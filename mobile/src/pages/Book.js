import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, AsyncStorage, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import api from '../services/api';

// import { Container } from './styles';

export default function Book({ navigation }) {

    const id = navigation.getParam('id');
    const [date, setDate] = useState('');


    async function handleSubmit() {
        const user_id = await AsyncStorage.getItem("user");

        await api.post(`/spots/${id}/bookings`, {
            date
        }, {
            headers: { user_id }
        })

        Alert.alert("Sucesso!", "Solicitação de reserva enviada");
        navigation.navigate('List');
    }

    function handleCancel() {
        navigation.navigate('List');
    }

    return (
        <SafeAreaView style={style.form}>
            <Text style={style.label}>Data de Interesse *</Text>
            <TextInput
                style={style.input}
                placeholder="Qual data você quer reservar"
                placeholderTextColor="#999"
                autoCapitalize="none"
                autoCorrect={false}
                value={date}
                onChangeText={date => setDate(date)}
            />
            <TouchableOpacity
                onPress={handleSubmit}
                style={style.button}>
                <Text style={style.buttonText}>Solicitar Reserva</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={handleCancel}
                style={[style.button, style.Cancelbutton]}>
                <Text style={style.buttonText}>Cancelar</Text>
            </TouchableOpacity>


        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 60
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 16,
        color: '#444',
        marginBottom: 20,
        borderRadius: 2
    },
    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },
    Cancelbutton: {
        backgroundColor: '#ccc',
        marginTop: 10
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
})