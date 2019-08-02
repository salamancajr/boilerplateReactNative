import { createAppContainer, createStackNavigator } from 'react-navigation';
import TestScreen from './src/screens/TestScreen';

const App = createStackNavigator({
    TestScreen: { screen: TestScreen },
});

export default createAppContainer(App);
