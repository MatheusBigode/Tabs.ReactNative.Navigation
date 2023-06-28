import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export function ScreenB() {

    const navigation = useNavigation();

    function openScreen(){
        navigation.navigate('screenA')
    }

  return (
    <View style={styles.container}>
       <Button
            title='Voltar para Tela A'
            onPress={openScreen}
            color='#215959'
       />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#50D9D9",
        justifyContent: 'center'
    },

}) 

export default ScreenB;