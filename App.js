/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React, { Component } from 'react';
 import {
   Text,
   StatusBar
 } from 'react-native';
 import { Provider } from 'react-redux';
 import Navigator from './src/Navigation';
 import store from './src/Store';
 import LoaderWrapper from './src/Components/HOC/LoaderWrapper';
 import { Root } from 'native-base';
 export default class App extends Component {
 
   constructor(props) {
     super(props);
   }
 
   componentDidMount() {
     /* font scaling */
     if (Text.defaultProps == null) {
       Text.defaultProps = {};
       Text.defaultProps.allowFontScaling = false;
     }
     /* disable warnings */
     console.disableYellowBox = true;
     StatusBar.setTranslucent(true)
     StatusBar.setBackgroundColor('transparent')
   }
 
   render() {
     return (
       <Provider store={store}>
         <LoaderWrapper>
           <Root>
             <StatusBar />
             <Navigator ref={nav => { this.navigator = nav; }} />
           </Root>
         </LoaderWrapper>
       </Provider>
     )
   }
 }