import AllActivities from "./screens/Activities";
import AddExercise from "./screens/AddExcercise";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "./screens/Profile";
import Summary from "./screens/Summary";

// Create a stack navigator
const Stack = createStackNavigator();

// Define the main app stack
const AppStack = () => {
  return (
    // Wrap the stack navigator with NavigationContainer
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AllActivities">
        <Stack.Screen name="AllActivities" component={AllActivities} />
        <Stack.Screen name="AddExercise" component={AddExercise} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Summary" component={Summary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
