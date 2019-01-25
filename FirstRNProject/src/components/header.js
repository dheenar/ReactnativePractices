import React from 'react';
import {Text,View,Image} from 'react-native';

const Header = (ss) => {
    return (
         <View style = {styles.viewStyle}>
        <Image source={require('../images/logo_white.png')} style = {styles.logoImageStyle}/>
        </View>
        );

};

const styles = {
     viewStyle: {
      backgroundColor : '#1e90ff',
      justifyContent : 'center',
      alignItems :  'center',
      height : 84,
      paddingTop : 20,

    },
    textStyle: {
        fontSize:20
    },
    logoImageStyle:{
        height:44,
        width:130,
        marginTop: 20,
       
    },
};

export default Header;