import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
// import Header from './components/MnM\'sKitchenetteHeader';
// import Footer from './components/Footer';
import MenuItems from './components/MenuItems';


export default function App() {
  return (
    <View  style={{
              flex: 1,
              backgroundColor: '#495E57',
            }}>
      
      {/* <Header/> */}
      <View style={{ justifyContent: 'center' , alignItems: 'center'}}/> 
      <MenuItems/>
     
      {/* <Footer/>  */}
        
      </View>
      
     
    
  );
}




