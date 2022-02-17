import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  Button,
  SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { TextInput } from 'react-native';


export default function BMI() {
const onButtonPress = () => { Alert.alert('your recipes on 2.1');
};
const onButtonPress1 = () => { Alert.alert('your recipes on 1.31');
};
const onButtonPress2 = () => { Alert.alert('your recipes on 1.30');
};
const onButtonPress3 = () => { Alert.alert('your recipes on 1.29');
};
  return (
    <>
    <SafeAreaView>
      <ScrollView>
      <Button title="BMI & recipes" onPress={() => {navigation.navigate('BreakFast');}}></Button>
<Image source={require('../assets/BMI.png')}
     resizeMode='center'>   
     
      </Image>
   
    <Button title="2.1"  onPress={onButtonPress}></Button>
 
  <Button title="1.31"  onPress={onButtonPress1}>
  
  </Button><Button title="1.30"  onPress={onButtonPress2}></Button>
<Button title="1.29"  onPress={onButtonPress3}></Button>

    </ScrollView>
    </SafeAreaView>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 30
  }
});