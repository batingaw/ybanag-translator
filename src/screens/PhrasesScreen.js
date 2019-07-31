import React from 'react';
import { ScrollView, Text } from 'react-native';

import Phrase from './Phrase';

const english2ybanag = require('../translations/english2ybanag-phrases.json')

export default class SplashScreen extends React.Component {
    static navigationOptions = {
        title: 'Common Phrases',
    }
    render() {
        var phrases = [];
        var index = 0;
        Object.keys(english2ybanag).forEach(function(key) {
            index = index + 1;
            phrases.push(<Phrase english={key} ybanag={english2ybanag[key]} key={index}></Phrase>);
          })
        return (
            <ScrollView>
                {phrases}
            </ScrollView>
        );
    }
}

