
import React from 'react';
import { View, Text, StyleSheet, Image ,FlatList} from 'react-native';
import Card from '../components/Card';

const Weather = (props) => {
   console.log(props.dataa['0'],'new');
    return (
        <View style={styles.cardContainer}>
            <View style={styles.card}>
                <Text style={styles.text}>{props.dataa['0']['main'].temp}°C</Text>
                <Image style={{ width: 100, height: 100 }} source={{ uri: "https://openweathermap.org/img/w/" + props.dataa['0']['weather']['0'].icon + ".png" }} />
                <Text style={styles.text1}>{props.city}</Text>
                <View style={styles.line}></View>
                <View style={styles.cardBottom}>
                    <Text style={styles.text2}>{props.dataa['0']['weather']['0'].main}</Text>
                    <Text style={styles.text2}>{props.dataa['0']['weather']['0'].description}</Text>
                </View>
            </View>
            <View style={styles.section}>
            <FlatList data={props.dataa} keyExtractor={item => item.dt_text} renderItem={({item}) => <Card  item={item} />} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#505556',
        height: '50%',
        minWidth: '90%',
        alignItems: 'center',
        borderRadius: 12,
        margin: '3%',
        borderWidth:0.4
    },
    section: {
       flex:1,
       alignSelf:'stretch'
    },
    text: {
        marginTop: '10%',
        fontSize: 30,
        color: '#ddd'
    },
    text1: {
        fontSize: 30,
        color: '#ddd'
    },
    text2: {
        fontSize: 20,
        color: '#ddd'
    },
    line: {
        backgroundColor: '#ddd',
        minWidth: '90%',
        height: '0.2%',
        margin: '5%'
    },
    cardBottom: {
        flex: 1,
        flexDirection: 'row',
        margin: '2%',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        marginHorizontal: '8%'
    }
})

export default Weather;