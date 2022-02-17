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
  TextInput,
} from 'react-native';
import calendar from'../calendar'
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native';
import MinimalismCalendar from 'react-native-ocalendar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default class FriendsZone extends Component {
  constructor(props){
     super(props)
     this.state={
        data:"FriendsZone"
     }
     this.DateTransfer=this.DateTransfer.bind(this)
  }
  //数据设置
  DateTransfer(cont){
    // Alert.alert(cont)
     this.setState({
        data:cont[0]+'-'+cont[1]+'-'+cont[2]
     })
  }
  
 
  render() {
var type;
a = new calendar();
    return (
      <>
      <ScrollView>
      <View style={styles.container}>
          <TouchableOpacity
            style={{paddingVertical:15,
              paddingHorizontal:30,borderRadius:3,alignItems:'center',justifyContent:'center'}}
              onPress={()=>{}}>
              <Text style={{fontSize:15,color:'black'}}>{this.state.data}</Text>
          </TouchableOpacity>
         <MinimalismCalendar DateTransfer={this.DateTransfer}/>
      </View>
   <View>
   < Text>Yuhan Ma                                                            1min</Text>
     <Icon name='github-alt' size={40} color='black'/>
   < Text>This is the 28th day of my check-in! I accomplished my goal today! Here is my recipe...</Text>
         <Image source={require('../assets/recipe.jpg')}
     resizeMode='center'>   
     
      </Image>
     <Icon name='heart-o' size={40} color='red' />    




    </View>
    <View>
            <TextInput style={{borderWidth:1,borderColor:'red',height:40}} placeholder='What would you like to post?' 
        onChangeText = {(text) => {type = text}}/>
<Button title="Post" onPress={() => {global.posted.push(type);}}></Button>
    </View>
    </ScrollView>
      </>

    );
  }
    
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 30
  }
});