import AllActivities from "./screens/Activities";
import AddExercise from "./screens/AddExcercise";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "./screens/Profile";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AllActivities">
        <Stack.Screen name="AllActivities" component={AllActivities} />
        <Stack.Screen name="AddExercise" component={AddExercise} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
