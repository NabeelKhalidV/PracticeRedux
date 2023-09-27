

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import StackNavigation from './StackNavigation';



const App=()=>{

  return(
   <NavigationContainer>
    <StackNavigation></StackNavigation>
   </NavigationContainer>
  )
}

export default App;
