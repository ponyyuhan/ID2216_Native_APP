import {Dimensions, Platform, StatusBar} from 'react-native';

global.width = Dimensions.get('window').width;
global.height = Dimensions.get('window').height;
global.id = "123456";
global.password = "123456";

global.age = -1;
global.weight = -1;
global.height = -1;
global.sex = "err";

global.goal = "unchosen"

global.breakfastType = [];
global.lunchType = [];
global.dinnerType = [];
global.snackType = [];
global.fruitType = [];

global.visitorPermission = false;
global.foodPreference = [];

global.posted = [];