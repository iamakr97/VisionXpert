import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import Home from './src/screens/Home';
import Help from './src/screens/Help';
import Feedback from './src/screens/Feedback';
import ObjectDetection from './src/screens/ObjectDetection';
import RoseDisease from './src/screens/RoseDisease';
import FishDisease from './src/screens/FishDisease';
import BeeClassification from './src/screens/BeeClassification';

// Import custom PNG icons
import HomeIcon from './src/assets/home.png';
import HelpIcon from './src/assets/help.png';
import FeedbackIcon from './src/assets/feedback.png';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator for Home
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }} />
    <Stack.Screen name="ObjectDetection" component={ObjectDetection} />
    <Stack.Screen name="RoseDisease" component={RoseDisease} />
    <Stack.Screen name="FishDisease" component={FishDisease} />
    <Stack.Screen name="BeeClassificaion" component={BeeClassification} />
  </Stack.Navigator>
);

// Stack Navigator for Help
const HelpStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HelpScreen" component={Help} options={{ headerShown: false }} />
  </Stack.Navigator>
);

// Stack Navigator for Feedback
const FeedbackStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="FeedbackScreen" component={Feedback} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconSource;

            // Assign icons based on route names
            if (route.name === 'Home') {
              iconSource = HomeIcon;
            } else if (route.name === 'Help') {
              iconSource = HelpIcon;
            } else if (route.name === 'Feedback') {
              iconSource = FeedbackIcon;
            }

            // Return custom icon
            return (
              <Image
                source={iconSource}
                style={[
                  styles.icon,
                  { tintColor: focused ? '#ff8856' : 'gray' }, // Tint color change on focus
                ]}
              />
            );
          },
          tabBarActiveTintColor: '#ff8856', // Active tab color
          tabBarInactiveTintColor: 'gray',   // Inactive tab color
          headerShown: false,                // Hide header for the bottom tabs
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Help" component={HelpStack} />
        <Tab.Screen name="Feedback" component={FeedbackStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
