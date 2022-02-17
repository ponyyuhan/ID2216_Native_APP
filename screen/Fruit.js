import React, {Component} from 'react';
import '../constant.js'
import {
    StyleSheet,
    View,
    Switch,
    Text,
    Button,
    TextInput,
    FlatList,
} from 'react-native';

export default class Setting extends Component {

    state = {
        value: false,
    }

    render() {
  var type;
  var weight;
  return (
        <View style = {styles.container}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput style={{borderWidth:1,borderColor:'red',height:40}} placeholder='Type of Food' 
        onChangeText = {(text) => {type = text}}/>
        <TextInput style={{borderWidth:1,borderColor:'red',height:40}} placeholder='Weight/g' 
        onChangeText = {(text) => {weight = text}}/>
      <Button title="Add" onPress={() => {global.fruitType.push({Type:type+":"+weight+"g"});}} />
      <View style={styles.container}>
      <FlatList
            data = {global.fruitType}
            renderItem = {({item})=><Text style={styles.item}>{item.Type}</Text>}
          />
          </View>
    </View>
    <View style = {{flexDirection: 'row',justifyContent:'space-between' ,alignContent:'flex-end'}}>
      <View style={{width: 100}}><Button title="Profile" onPress={() => {navigation.navigate('Profile');}} /></View>
      <View style={{width: 100}}><Button title="Record" onPress={() => {navigation.navigate('Profile');}} /></View>
      <View style={{width: 100}}><Button title="Setting" onPress={() => {navigation.navigate('Setting');}} /></View>
    </View>
    </View>
  );
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: React.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
