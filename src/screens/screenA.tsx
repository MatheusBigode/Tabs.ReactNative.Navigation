import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';


export function ScreenA() {
    const navigation = useNavigation();

    function openScreen(){
        navigation.navigate('screenB')
    }


  return (
    <View style={styles.container}>
       <Button
            title='Ir para Tela B'
            onPress={openScreen}
            color='#50D9D9'
       />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#215959",
        justifyContent: 'center'
    },

}) 