import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Weather from './components/Weather';
import Error from './components/Error';
import LottieView from 'lottie-react-native';
import { PermissionsAndroid } from 'react-native';
navigator.geolocation = require('@react-native-community/geolocation')



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            city: null,
            dateData: [],
            error: false
        }
    }


    //    async componentDidMount() {
    //         const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    //         console.log(granted);
    //         if (granted) {
    //             navigator.geolocation.getCurrentPosition(
    //                 position => {
    //                     this.fetchWeather(position.coords.latitude, position.coords.longitude);
    //                 },
    //                 error => {
    //                     this.setState({
    //                     });
    //                     alert(error);
    //                 }
    //             );
    //         }
    //         else {
    //             alert('ACCESS_FINE_LOCATION permission denied');
    //             console.log("ACCESS_FINE_LOCATION permission denied")
    //         }

    //     }





    async componentDidMount() {
       this.requestLocationPermission();
    }

    requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "Weather App Location Permission",
                    message:
                        "Cool Weather App needs access to your location " +
                        "so you may know weather condition.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        this.fetchWeather(position.coords.latitude, position.coords.longitude);
                    },
                    error => {
                        this.setState({
                        });
                        alert(error);
                    }
                );
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };




    async fetchWeather(lat, lon) {
        fetch(
            `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=09dd46a3688013405cf673f9ca3adcb9&units=metric`
        )
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoading: false,
                    city: json['city'].name,
                    dateData: json['list']
                })
            }).catch((error) => { this.setState({ error: true });alert(error); }).finally(() => { this.setState({ isLoading: false }) })
    }

    render() {
        const { isLoading, error } = this.state;
        return (
            <View style={styles.container}>
                {
                    isLoading ? <LottieView source={require('./assets/loader.json')} autoPlay loop speed={2} /> : error ? (<View><Error></Error></View>) : (<View>
                        <Weather dataa={this.state.dateData} city={this.state.city}></Weather>
                    </View>)
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    }
})