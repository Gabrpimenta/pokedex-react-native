import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Welcome } from '../screens/Welcome';

const Stack = createNativeStackNavigator();
export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  );
}
