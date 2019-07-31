import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import {
    AdMobBanner
  } from 'react-native-admob'

const english2ybanag = require('../translations/english2ybanag.json')

export default class HomeScreen extends React.Component {

    static navigationOptions = ({navigation}) => ({
        title: 'Ybanag',
        headerLeft: null,
        headerRight: (
            <View style={styles.headerRightContainer}>
              <TouchableOpacity 
                onPress={ (x) => navigation.navigate('PhrasesRoute')}>
                <Image
                    style={styles.icon}
                    source={require('../assets/phrases.png')}
                />
              </TouchableOpacity>
            </View>
          )
    });

    constructor(props) {
      super(props);
      this.state = {
            input: '',
            output: '',
            from: 'English',
            to: 'Ybanag'
        }
    }
    showTranslation(e) {
        //debugger;
        console.log("translation begin..");
        const input = this.state.input.toLowerCase();
 
        const translation = input in english2ybanag ?
            english2ybanag[input] :
            null;

        this.setState({output: translation || 'Not Found'});
        console.log("translation end..");
    }
    render() {
      return (
        <View style={styles.homeContainer}>
            <View style={styles.contentContainer}>
                <Text style={styles.inputLabel}>
                    Type something in English:
                </Text>

                <TextInput style={styles.input}
                    autoFocus={true}
                    onChangeText={(e) => this.setState({input: e})}
                    onSubmitEditing={(e) => this.showTranslation(e) }
                    onBlur={(e) => this.showTranslation(e) }
                />

                <Text style={styles.ybanagLabel} >
                    Ybanag:
                </Text>

                <Text style={styles.ybanagTranslation} >  
                    {this.state.output}              
                </Text>
            </View>
            <View>
                <AdMobBanner
                    adSize="fullBanner"
                    adUnitID="ca-app-pub-9959650905583486/5544046581"
                    testDevices={[AdMobBanner.simulatorId]}
                    onAdFailedToLoad={error => console.error(error)}
                />
            </View>
        </View>
      );
    }
  }

  
const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        flexDirection:"column",
        backgroundColor: '#fff'
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 15
    },
    inputLabel: {
        fontSize: 20
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0
    },
    ybanagLabel: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 18
    },
    ybanagTranslation: {
        marginTop: 15,
        fontSize: 30,
        fontStyle: 'italic',
        height: 50
    },    
    icon: {
        width: 50,
        height: 50,
        marginRight: 20
    }
});