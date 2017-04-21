/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class root extends Component {
  componentWillMount(){
    console.log('即将加载');
  }
  componentDidMount(){
    console.log('加载完成');
  }
  componentWillUpdate(){
    console.log('即将更新');
  }
  componentDidUpdate(){
    console.log('更新完成');
  }
  componentWillUnmount(){
    console.log('销毁');
  }
  render() {
    return (
      <View style={styles.container}>
       <Image source={{uri:'start.jpg'}} style={styles.imgsetting}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    imgsetting:{
        flex:1,
        width:require('Dimensions').get('window').width,
        height:require('Dimensions').get('window').height,
        backgroundColor:'red'
    },
});
