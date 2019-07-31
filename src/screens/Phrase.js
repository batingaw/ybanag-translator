import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class Phrase extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return  <View style={styles.phraseContainer}> 
                    <Text style={styles.phraseText}>{this.props.english} -> {this.props.ybanag}</Text>
                </View>

    }
}

const styles = StyleSheet.create({
    phraseContainer: {
        marginLeft: 10,
        marginRight: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    phraseText: {
        fontSize: 20
    }
});