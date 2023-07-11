import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Introduction from "./src/screens/Introduction/Index";
import Game from "./src/screens/Game/Index";

import colors from "./src/styles/colors";
import AppProvider from "./src/context/AppProvider";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer >
      <AppProvider>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={Introduction}
            options={{ 
              title: 'Math Quiz',
              animation: 'flip',
              headerStyle: {
                backgroundColor: colors.secondary,
              },
              headerTitleStyle: {
                color: colors.text,
                fontWeight: '600'
              }
            }} />
          <Stack.Screen 
            name="Game" 
            component={Game} 
            options={{ 
              title: 'Math Quiz',
              animation: 'flip',
              headerBackVisible: false,
              headerStyle: {
                backgroundColor: colors.secondary,
              },
              headerTitleStyle: {
                color: colors.text,
                fontWeight: '600'
              }
            }} />
        </Stack.Navigator>
      </AppProvider>
    </NavigationContainer>
  );
}