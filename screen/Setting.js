import React, {Component} from 'react';
import Constants from 'expo-constants';
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
      var type = global.visitorPermission;
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row',paddingLeft:20}}>
                    <Button title= "Visitor Permission"
                            onPress={()=>{type = !type;global.visitorPermission = type;}}></Button>
                    <Switch style={{marginLeft:20}} value={global.visitorPermission} onTintColor='red' tintColor='blue'
                            thumbTintColor='black'/>
                </View>
                <TextInput style={{borderWidth:1,borderColor:'red',height:40}} placeholder='Type of Food' 
        onChangeText = {(text) => {type = text}}/>
      <Button title="Add" onPress={() => {global.foodPreference.push({Type:type});}} />
      <FlatList
            data = {global.foodPreference}
            renderItem = {({item})=><Text style={styles.item}>{item.Type}</Text>}
          />
    <View  style = {styles.foot}>
    <Button title="Confirm" onPress={() => {global.visitorPermission = this.state.value;}} />
    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
foot:
{
    alignContent:'flex-end'
},
item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
