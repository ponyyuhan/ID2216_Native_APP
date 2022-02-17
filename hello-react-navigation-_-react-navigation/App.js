import FriendZone from './screen/FriendZone.js'
import './constant.js'
import BMI from './screen/BMI.js'
import Setting from './screen/Setting.js'
import BreakFast from './screen/BreakFast'
import Lunch from './screen/Lunch'
import Dinner from './screen/Dinner'
import Snack from './screen/Snack'
import Fruit from './screen/Fruit'
import * as React from 'react';
import { Button,Switch, Alert, View, Text, Image, Linking, SafeAreaView, TextInput, StyleSheet, ListView, ScrollView,TouchableOpacity,FlatList,SectionList,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MinimalismCalendar from 'react-native-ocalendar';
import Icon from 'react-native-vector-icons/FontAwesome'

function SignInScreen({ navigation }) {
  var user;
  var password;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.textInputContainer}>
        <TextInput style={{borderWidth:1,borderColor:'red',height:40}} placeholder='user name'
        onChangeText = {(text) => {user = text}}/>
        <TextInput style={{borderWidth:1,borderColor:'red',height:40}} placeholder='password'
        onChangeText = {(text) => {password = text}} secureTextEntry={true}/>
      </View>
      <Button
        title="Next"
        onPress={() => 
        {global.user = user;
          global.password = password;
          navigation.navigate('LogIn');
         }}
      />
    </View>
  );
}

function LogInScreen({ navigation }) {
  var user;
  var password;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.textInputContainer}>
        <TextInput style={{borderWidth:1,borderColor:'red',height:40}} placeholder='user name'
        onChangeText = {(text) => {user = text}}/>
        <TextInput style={{borderWidth:1,borderColor:'red',height:40}} placeholder='password'
        onChangeText = {(text) => {password = text}} secureTextEntry={true}/>
      </View>
      <Button
        title="Next"
        onPress={() => 
        {if(user == global.user && password == global.password) navigation.navigate('Information');
        else 
        {
          Alert.alert('Invalid user/password');
        }
         }}
      />
      <Button
        title="Sign in"
        onPress={() => 
        {navigation.navigate('SignIn');
         }}
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.textInputContainer}>
        <TextInput style={{borderWidth:1,borderColor:'red',height:40}} placeholder='Weight/kg'
        onChangeText = {(text) => {global.weight = text}}/>
        <TextInput style={{borderWidth:1,borderColor:'red',height:40}} placeholder='Height/cm'
        onChangeText = {(text) => {global.height = text}}/>
        <TextInput style={{borderWidth:1,borderColor:'red',height:40}} placeholder='Sex'
        onChangeText = {(text) => {global.sex = text}}/>
        <TextInput style={{borderWidth:1,borderColor:'red',height:40}} placeholder='Age'
        onChangeText = {(text) => {global.age = text}}/>
      </View>
      <Button
        title="Next"
        onPress={() => 
        {navigation.navigate('Goal');
         }}
      />
    </View>
  );
}

function GoalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Lose Weight" onPress={() => {navigation.navigate('Search');global.goal = "Lose Weight"}} />
      <Button title="Shaping" onPress={() => {navigation.navigate('Search');global.goal = "Shaping"}} />
      <Button title="Muscle Building" onPress={() => {navigation.navigate('Search');global.goal = "Muscle Building"}} />
    </View>
  );
}

function SearchScreen({ navigation }) {
  return (
    <View style = {styles.container}>
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Button title="BreakFast" onPress={() => {navigation.navigate('Breakfast');}} />
      <Button title="Lunch" onPress={() => {navigation.navigate('Lunch');}} />
      <Button title="Dinner" onPress={() => {navigation.navigate('Dinner');}} />
      <Button title="Snacks" onPress={() => {navigation.navigate('Snacks');}} />
      <Button title="Fruits" onPress={() => {navigation.navigate('Fruits');}} />
    </View>
    <View style = {{flexDirection: 'row',justifyContent:'space-between' ,alignContent:'flex-end'}}>
      <View style={{width: 100}}><Button title="Profile" onPress={() => {navigation.navigate('Profile');}} /></View>
      <View style={{width: 100}}><Button title="Record" onPress={() => {navigation.navigate('Record');}} /></View>
      <View style={{width: 100}}><Button title="Setting" onPress={() => {navigation.navigate('Setting');}} /></View>
    </View>
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style = {styles.container}>
    <View style={styles.item,{  flex: 1, alignItems: 'center'}}>
     <Image source={require('./assets/headShot.png')}/>
    <Text>User: {JSON.stringify(global.user)}</Text>
    <Text>Age: {JSON.stringify(global.age)}</Text>
    <Text>Sex: {JSON.stringify(global.sex)}</Text>
    <Text>Height: {JSON.stringify(global.height)}</Text>
    <Text>Weight: {JSON.stringify(global.weight)}</Text>
    </View>

    <View>
      <Button title="BMI curve&recipies" onPress={() => {navigation.navigate('BMI');}} />
      <Button title="Contacts" onPress={() => {navigation.navigate('Contact');}} />
      <Button title="Settings" onPress={() => {navigation.navigate('Setting');}} />
      <Button title="FriendZone" onPress={() => {navigation.navigate('FriendZone');}} />
    </View>
    </View>
  );
}



function ContactScreen({ navigation }) {
    return (
<View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic','Devin', 'Dan', 'Dominic','Devin', 'Dan', 'Dominic',]},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>

    );
}

function SettingScreen({ navigation }) {
 var type = global.visitorPermission;
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row',paddingLeft:20}}>
                    <Button title= "Visitor Permission"
                            onPress={()=>{type = !type;global.visitorPermission = type;navigation.push('Setting');}}></Button>
                    <Switch style={{marginLeft:20}} value={global.visitorPermission} onTintColor='red' tintColor='blue'
                            thumbTintColor='black'/>
                </View>
                <TextInput style={{borderWidth:1,borderColor:'red',height:40}} placeholder='Type of Food' 
        onChangeText = {(text) => {type = text}}/>
      <Button title="Add" onPress={() => {global.foodPreference.push({Type:type});navigation.push('Setting');}} />
      <FlatList
            data = {global.foodPreference}
            renderItem = {({item})=><Text style={styles.item}>{item.Type}</Text>}
          />
    <View  style = {styles.foot}>
    <Button title="Back" onPress={() => {navigation.navigate('Profile');}} />
    </View>
            </View>
        );
}

function FriendZoneScreen({ navigation }) {
  a = new FriendZone();
    return (
      a.render()
    );
}

function BreakFastScreen({ navigation }) {
      var type;
  var weight;
  return (
    <View style = {styles.container}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput style={{borderWidth:1,borderColor:'red',height:40}} placeholder='Type of Food' 
        onChangeText = {(text) => {type = text}}/>
        <TextInput style={{borderWidth:1,borderColor:'red',height:40}} placeholder='Weight/g' 
        onChangeText = {(text) => {weight = text}}/>
      <Button title="Add" onPress={() => {global.breakfastType.push({Type:type+":"+weight+"g"});navigation.push('Breakfast');}} />
      <View style={styles.container}>
      <FlatList
            data = {global.breakfastType}
            renderItem = {({item})=><Text style={styles.item}>{item.Type}</Text>}
          />
          </View>
       
    </View>
     <Button title="Back" onPress={() => {navigation.navigate('Search');}} />
    <View style = {{flexDirection: 'row',justifyContent:'space-between' ,alignContent:'flex-end'}}>
      <View style={{width: 100}}><Button title="Profile" onPress={() => {navigation.navigate('Profile');}} /></View>
      <View style={{width: 100}}><Button title="Record" onPress={() => {navigation.navigate('Record');}} /></View>
      <View style={{width: 100}}><Button title="Setting" onPress={() => {navigation.navigate('Setting');}} /></View>
    </View>
    </View>
  );
}

function LunchScreen({ navigation }) {
 var type;
  var weight;
  return (
        <View style = {styles.container}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput style={{borderWidth:1,borderColor:'red',height:40}} placeholder='Type of Food' 
        onChangeText = {(text) => {type = text}}/>
        <TextInput style={{borderWidth:1,borderColor:'red',height:40}} placeholder='Weight/g' 
        onChangeText = {(text) => {weight = text}}/>
      <Button title="Add" onPress={() => {global.lunchType.push({Type:type+":"+weight+"g"});navigation.push('Lunch');}} />
      <View style={styles.container}>
      <FlatList
            data = {global.lunchType}
            renderItem = {({item})=><Text style={styles.item}>{item.Type}</Text>}
          />
          </View>
    </View>
    <Button title="Back" onPress={() => {navigation.navigate('Search');}} />
    <View style = {{flexDirection: 'row',justifyContent:'space-between' ,alignContent:'flex-end'}}>
      <View style={{width: 100}}><Button title="Profile" onPress={() => {navigation.navigate('Profile');}} /></View>
      <View style={{width: 100}}><Button title="Record" onPress={() => {navigation.navigate('Record');}} /></View>
      <View style={{width: 100}}><Button title="Setting" onPress={() => {navigation.navigate('Setting');}} /></View>
    </View>
    </View>
  );
}

function DinnerScreen({ navigation }) {
  var type;
  var weight;
  return (
        <View style = {styles.container}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput style={{borderWidth:1,borderColor:'red',height:40}} placeholder='Type of Food' 
        onChangeText = {(text) => {type = text}}/>
        <TextInput style={{borderWidth:1,borderColor:'red',height:40}} placeholder='Weight/g' 
        onChangeText = {(text) => {weight = text}}/>
      <Button title="Add" onPress={() => {global.dinnerType.push({Type:type+":"+weight+"g"});navigation.push('Dinner');}} />
      <View style={styles.container}>
      <FlatList
            data = {global.dinnerType}
            renderItem = {({item})=><Text style={styles.item}>{item.Type}</Text>}
          />
          </View>
    </View>
    <Button title="Back" onPress={() => {navigation.navigate('Search');}} />
    <View style = {{flexDirection: 'row',justifyContent:'space-between' ,alignContent:'flex-end'}}>
      <View style={{width: 100}}><Button title="Profile" onPress={() => {navigation.navigate('Profile');}} /></View>
      <View style={{width: 100}}><Button title="Record" onPress={() => {navigation.navigate('Record');}} /></View>
      <View style={{width: 100}}><Button title="Setting" onPress={() => {navigation.navigate('Setting');}} /></View>
    </View>
    </View>
  );
}

function SnackScreen({ navigation }) {
  var type;
  var weight;
  return (
        <View style = {styles.container}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput style={{borderWidth:1,borderColor:'red',height:40}} placeholder='Type of Food' 
        onChangeText = {(text) => {type = text}}/>
        <TextInput style={{borderWidth:1,borderColor:'red',height:40}} placeholder='Weight/g' 
        onChangeText = {(text) => {weight = text}}/>
      <Button title="Add" onPress={() => {global.snackType.push({Type:type+":"+weight+"g"});navigation.push('Snacks');}} />
      <View style={styles.container}>
      <FlatList
            data = {global.snackType}
            renderItem = {({item})=><Text style={styles.item}>{item.Type}</Text>}
          />
          </View>
    </View>
    <Button title="Back" onPress={() => {navigation.navigate('Search');}} />
    <View style = {{flexDirection: 'row',justifyContent:'space-between' ,alignContent:'flex-end'}}>
      <View style={{width: 100}}><Button title="Profile" onPress={() => {navigation.navigate('Profile');}} /></View>
      <View style={{width: 100}}><Button title="Record" onPress={() => {navigation.navigate('Record');}} /></View>
      <View style={{width: 100}}><Button title="Setting" onPress={() => {navigation.navigate('Setting');}} /></View>
    </View>

    </View>
  );
}

function FruitScreen({ navigation }) {
  var type;
  var weight;
  return (
        <View style = {styles.container}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput style={{borderWidth:1,borderColor:'red',height:40}} placeholder='Type of Food' 
        onChangeText = {(text) => {type = text}}/>
        <TextInput style={{borderWidth:1,borderColor:'red',height:40}} placeholder='Weight/g' 
        onChangeText = {(text) => {weight = text}}/>
      <Button title="Add" onPress={() => {global.fruitType.push({Type:type+":"+weight+"g"});navigation.push('Fruits');}} />
      <View style={styles.container}>
      <FlatList
            data = {global.fruitType}
            renderItem = {({item})=><Text style={styles.item}>{item.Type}</Text>}
          />
          </View>
    </View>
    <Button title="Back" onPress={() => {navigation.navigate('Search');}} />
    <View style = {{flexDirection: 'row',justifyContent:'space-between' ,alignContent:'flex-end'}}>
      <View style={{width: 100}}><Button title="Profile" onPress={() => {navigation.navigate('Profile');}} /></View>
      <View style={{width: 100}}><Button title="Record" onPress={() => {navigation.navigate('Record');}} /></View>
      <View style={{width: 100}}><Button title="Setting" onPress={() => {navigation.navigate('Setting');}} /></View>
    </View>
    </View>
  );
}

function BMIScreen() {
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
<Image source={require('./assets/BMI.png')}
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


function RecordScreen() {
const onButtonPress = () => { Alert.alert('we will improve it!');
};
const onButtonPress1 = () => { Alert.alert('we will improve it!');
};
const onButtonPress2 = () => { Alert.alert('we will improve it!');
};

  return (
    <>
    <SafeAreaView>
     
     
      <Button title="Record" ></Button>
 <View style={styles.container}>
   
    <Button title="Drinking water"  onPress={onButtonPress}></Button>
 
  <Button title="sport"  onPress={onButtonPress1}>
  
  </Button><Button title="sleeping"  onPress={onButtonPress2}></Button>

    <View style = {{flexDirection: 'row',justifyContent:'space-between' ,alignContent:'flex-end'}}>
      <View style={{width: 100}}><Button title="Profile" onPress={() => {navigation.navigate('Profile');}} /></View>
      <View style={{width: 100}}><Button title="Record" onPress={() => {navigation.navigate('Record');}} /></View>
      <View style={{width: 100}}><Button title="Setting" onPress={() => {navigation.navigate('Setting');}} /></View>
    </View>
</View>
 
    </SafeAreaView>
      </>
  );
}

function PostScreen() {
    const [value, onChangeText] = React.useState('Say something...');

  return (
    <>
      <ScrollView>
      <Button title="Friendszone" onPress={() => {navigation.navigate('BreakFast');}}></Button>

     <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    <Button title="Post" onPress={() => {navigation.navigate('BreakFast');}}></Button>

   <View>
   < Text>Yuhan Ma                                                            1min</Text>
     <Icon name='github-alt' size={40} color='black'/>
   < Text>This is the 28th day of my check-in! I accomplished my goal today! Here is my recipe...</Text>
         <Image source={require('../assets/recipe.jpg')}
     resizeMode='center'>   
     
      </Image>
     <Icon name='heart-o' size={40} color='red' />    




    </View>
   
    </ScrollView>
      </>
  );
}


const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
textInputContainer:{
    marginTop:20,
    marginLeft:10,
    marginRight:10,
    backgroundColor:'white'
  },
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
sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIN">
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Information" component={HomeScreen} />
        <Stack.Screen name="Goal" component={GoalScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Breakfast" component={BreakFastScreen} />
        <Stack.Screen name="Lunch" component={LunchScreen} />
        <Stack.Screen name="Dinner" component={DinnerScreen} />
        <Stack.Screen name="Fruits" component={FruitScreen} />
        <Stack.Screen name="Snacks" component={SnackScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Record" component={RecordScreen} />
        <Stack.Screen name="FriendZone" component={FriendZoneScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="BMI" component={BMIScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
