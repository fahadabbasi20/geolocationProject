import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Card = (props) => {

    let time;
    var dtee = props.item.dt_txt.replace(' ', 'T');
    var date = new Date(dtee);
    var Day = date.getDay();
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    time = hours + ':' + minutes.substr(-2);
    console.log(Day);

    const returnDay = (Day) => {
        if (Day == '1') {
            return 'Monday';
        } else if (Day == '2') {
            return 'Tuesday';
        } else if (Day == '3') {
            return 'Wednesday';
        } else if (Day == '4') {
            return 'Thursday';
        } else if (Day == '5') {
            return 'Friday';
        } else if (Day == '6') {
            return 'Saturday';
        } else if (Day == '0') {
            return 'Sunday';
        } else {
            return null
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>{returnDay(Day)} </Text>
                <Text style={{color:'#DE2831',fontWeight:'bold'}}>{time}</Text>
            </View>
            <View style={styles.right}>
                <Image  style={{ width: 50, height: 50 }} source={{ uri: "https://openweathermap.org/img/w/" + props.item['weather']['0'].icon + ".png" }} />
                <Text style={{marginTop:'15%',fontWeight:'bold'}}>{props.item['main'].temp}°C</Text>
            </View>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
        margin: '0%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        minHeight: 53,
        minWidth: 20,
        backgroundColor: '#08ABCB',
        borderWidth: 0.3,
        borderTopLeftRadius:15,
        borderTopRightRadius:15
    },
    left:{
    marginHorizontal:15
    },
    right:{
        flexDirection:'row',
        marginHorizontal:'5%'
    }
})