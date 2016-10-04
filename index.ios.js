/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
      View,
TouchableOpacity
} from 'react-native';

var Headline = function(props) {
    this.render = () => <Text style={headlineStyle.text}>{props.caption}</Text>;
};

var headlineStyles = StyleSheet.create({
	text: {
	    fontSize:32,
	    fontWeight: 'bold'
	}
    });

module.exports = Headline;

class HelloWorld extends Component {
    clickMe() {
	alert('Hi!');
    }

  render() {
      return (
	      <View style={styles.container}>
	      <TouchableOpacity onPress={this.clickMe.bind(this)}>
	      <View style={styles.box}>
	      <Text>Hello {this.props.name}. Please click me.</Text>
          </View>
        </TouchableOpacity>
      </View>
	      );
  }
}

const styles = StyleSheet.create({
	container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center'
	},
	
	box: {
	    borderColor: 'red',
	    backgroundColor: '#fff',
	    borderWidth: 1,
	    padding: 10,
	    width: 100,
	    height: 100
	}
});


AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
