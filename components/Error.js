import React from 'react';
import {View,Text,Button} from 'react-native';
import RNRestart from 'react-native-restart';

const Error = () => {
    return (
        <View style={{marginBottom:'30%',margin:'5%'}}>
            <Text style={{fontSize:50,color:'white'}}>Something Went Wrong at our End</Text>
            <View style={{alignItems:'center',marginTop:'20%'}}>
               <Button color='green' title="RETRY" onPress={() => RNRestart.Restart()}></Button>
            </View>
        </View>
    )
}

export default Error;