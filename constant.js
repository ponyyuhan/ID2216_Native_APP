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
global.breakfastTotal = 0;
global.lunchTotal = 0;
global.dinnerTotal = 0;
global.snackTotal = 0;
global.fruitTotal = 0;

global.visitorPermission = false;
global.foodPreference = [];

global.posted = [];

global.calorie = [
  {key:"crackers",energy:"1.5"},
{key:"crisp",energy:"0.98"},
{key:"bread",energy:"0.06"},
{key:"beer",energy:"0.01"},
{key:"soda",energy:"0.35"},
{key:"cocktai",energy:"0.45	"},
{key:"coffee",energy:"0.72	"},
{key:"cola",energy:"4.04	"},
{key:"ale",energy:"0.64	"},
{key:"lemonade",energy:"0.44	"},
{key:"juice",energy:"0.8	"},
{key:"tea",energy:"4.72	"},
{key:"red wine",energy:"6.8	"},
{key:"buttermilk",energy:"8.33	"},
{key:"cheese",energy:"7.67	"},
{key:"eno",energy:"2.73	"},
{key:"chocolate",energy:"1.12	"},
{key:"milk",energy:"0.6	"},
{key:"soy milk",energy:"1.17	"},
{key:"yoourt",energy:"0.47	"},
{key:"chicken",energy:"0.26	"},
{key:"chili",energy:"0.61	"},
{key:"french fries",energy:"0.65	"},
{key:"milk shake",energy:"0.2	"},
{key:"butter",energy:"0.23	"},
{key:"lard",energy:"0.23	"},
{key:"oil",energy:"0.61	"},
{key:"salad",energy:"0.77	"},
{key:"shortenin",energy:"0.27	"},
{key:"calamari",energy:"0.43	"},
{key:"caviar",energy:"5	"},
{key:"brab",energy:"0.84	"},
{key:"haddock",energy:"0.87	"},
{key:"halibut",energy:"0.73	"},
{key:"lobster",energy:"3.47	"},
{key:"salmon",energy:"0.93	"},
{key:"flatfish",energy:"1.21	"},
{key:"tuna",energy:"3.43	"},
{key:"apple juice",energy:"2.88	"},
{key:"applesauce",enrgy:"1.26	"},
{key:"blackberries",energy:"2.27	"},
{key:"cherries",energy:"1.59	"},
{key:"cranberry juice",energy:"2.8	"},
{key:"fruit cocktail",energy:"2.27	"},
{key:"grape juice",energy:"1	"},
{key:"grapes",energy:"1.67	"},
{key:"lemon juice",energy:"0.33	"},
{key:"lime juice",energy:"2.47	"},
{key:"melon",energy:"1.58	"},
{key:"orane juice",energy:"0.82	"},
{key:"papaya",energy:"2.93	"},
{key:"peach",energy:"0.55	"},
{key:"pear",energy:"1.13	"},
{key:"pineapple",energy:"1.5	"},
{key:"prune",energy:"0.98	"},
{key:"raisins",energy:"0.06	"},
{key:"raspberries",energy:"0.01	"},
{key:"strawberries",energy:"0.35	"},
{key:"bread",energy:"0.45	"},
{key:"cheerios",energy:"0.72	"},
{key:"crackers",energy:"4.04	"},
{key:"corn",energy:"0.64	"},
{key:"macaroni",energy:"0.44	"},
{key:"muesli",energy:"0.8	"},
{key:"rice",energy:"4.72	"},
{key:"soba noodles",energy:"6.8	"},
{key:"spahetti",energy:"8.33	"},
{key:"taco shell",energy:"7.67	"},
{key:"almond",energy:"2.73	"},
{key:"bean",energy:"1.12	"},
{key:"beans",energy:"0.6	"},
{key:"cashews",energy:"1.17	"},
{key:"chickpeas",energy:"0.47	"},
{key:"lentils",energy:"0.26	"},
{key:"nuts",energy:"0.61	"},
{key:"peanut",energy:"0.65	"},
{key:"pecan",energy:"0.2	"},
{key:"seed",energy:"0.23	"},
{key:"tofu",energy:"0.23	"},
{key:"walnuts",energy:"0.61	"},
{key:"steak",energy:"0.77	"},
{key:"ham",energy:"0.27	"},
{key:"kidney",energy:"0.43	"},
{key:"lamb",energy:"5	"},
{key:"liver",energy:"0.84	"},
{key:"pork",energy:"0.87	"},
{key:"bacon",energy:"0.73	"},
{key:"ravy",energy:"3.47	"},
{key:"ketchep",energy:"0.93	"},
{key:"mustard",energy:"1.21	"},
{key:"onion",energy:"3.43	"},
{key:"pickle",energy:"2.88	"},
{key:"salsa",energy:"1.26	"},
{key:"sauce",energy:"2.27	"},
{key:"spinach",energy:"1.59	"},
{key:"salad",energy:"2.8	"},
{key:"macaroni",energy:"2.27	"},
{key:"poutine",energy:"1	"},
{key:"cheese",energy:"1.67	"},
{key:"popcorn",energy:"0.33	"},
{key:"trail",energy:"2.47	"},
{key:"noodle",energy:"1.58	"},
{key:"mushroom",energy:"0.82	"},
{key:"tomato",energy:"2.93	"},
{key:"beef",energy:"0.55	"},
];
