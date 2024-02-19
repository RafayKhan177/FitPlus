import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AllActivities from "./screens/Activities";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AllActivities">
        <Stack.Screen name="AllActivities" component={AllActivities} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { AppStack };
