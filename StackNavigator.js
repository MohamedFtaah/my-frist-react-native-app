import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/screens/Home';
import Teast from './app/screens/teast';

const Stack = createNativeStackNavigator();
export default function MyStack() {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Teast" component={Teast} />

        </Stack.Navigator>
    );
}
