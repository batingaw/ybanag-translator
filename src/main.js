import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import PhrasesScreen from './screens/PhrasesScreen';

const YbanagTranslator = StackNavigator({
    SplashRoute: { screen: SplashScreen },
    HomeRoute: { screen: HomeScreen },
    PhrasesRoute: { screen: PhrasesScreen }
});

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <YbanagTranslator />;
  }
}
