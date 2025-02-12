import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Button } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function DeviceScreen() {
    const [notes, setNotes] = useState('');
    const router = useRouter();
    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <Image
                        style={[{ width: 90, height: 50 }]}
                        source={require("../../../screens/assets/images/logo_arsit.png")}
                    />
                    <Text
                        style={styles.welcome}
                        onPress={() => router.back()}
                    >Bienvenido</Text>
                </View>
                <Ionicons name="arrow-back" size={30} color="#2D4B41" style={styles.backIcon} />
            </View>
            <View style={styles.textContainer}>
                
                <Text style={styles.text}> Dispositivo 1 </Text>
                <Text style={styles.text}> Dispositivo 2 </Text>
                <Text style={styles.text}> Dispositivo 3 </Text>
                <Text style={styles.text}> Dispositivo 4 </Text>

            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Escribe"
                    placeholderTextColor="#29463D"
                />
                <TouchableOpacity
                //onPress={handleSend} 
                //style={styles.iconContainer}
                >
                <Ionicons name="arrow-back" size={24} color="#29463D" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveButtonText}>GUARDAR</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
                <Image source={require("../../assets/images/icons/conexion_Mesa de trabajo 1.png")} style={styles.iconsFooter} />
                <Image source={require("../../assets/images/icons/mas.png")} style={styles.iconsFooter} />
                <View>
                    <TouchableOpacity onPress={() => router.push('/(tabs)/interfaz1')}>
                        <Image source={require("../../assets/images/icons/asistencia.png")} style={styles.iconsFooter} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'flex-start',
        padding: 20,
        paddingTop: 28
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        width: '100%',
        height: 50,
        marginBottom: 50,
        marginTop: 25,
    },
    header: {
        padding: 8,
    },
    backIcon: {
        alignSelf: 'flex-end',
        marginTop: 12,
        marginRight: 10,
        padding: 8,
    },
    welcome: {
        fontSize: 16,
        fontWeight: '500',
        color: '#29463D',
        marginTop: -8
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom:30,
    },
    text: {
        fontSize: 17,
        fontWeight: '400',
        fontFamily: 'poppins medium',
        padding:4,
    },
    notesContainer: {
        padding: 12,
        margin: 10,
        alignItems: 'baseline'
    },
    notesLabel: {
        color: '#29463D',
        fontWeight: '500',
        fontSize: 15,
    },
    notesText: {
        color: '#2D4B41',
        paddingTop: 5,
        fontWeight: '100',
        minHeight: 60,
        textAlignVertical: 'top',
    },
    saveButton: {
        backgroundColor: '#29463D',
        padding: 12,
        borderRadius: 25,
        alignItems: 'center',
        width: '100%',
        marginBottom: 23,
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#CCCCCC',
        borderRadius: 20,
        paddingHorizontal: 10,
        marginBottom: 15,
        marginTop: 80,
    },
    input: {
        flex: 1,
        backgroundColor: '#CCCCCC',
        padding: 17,
        borderRadius: 20,
        color: '#29463D',
        fontSize: 15,
        fontWeight: 500,
    },
    iconsFooter:{
        width:30,
        height:30,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop:5,
        padding: 5,
    },
});
