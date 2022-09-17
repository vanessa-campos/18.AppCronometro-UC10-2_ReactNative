import React from 'react';
import Contador from './android/app/src/components/Contador';
import { View, Image, ImageBackground } from 'react-native';

function App() {
  let imageBackground = require('./android/app/src/images/background.png');
  let logo = require('./android/app/src/images/logo.png');

  return (
    <ImageBackground source={imageBackground} style={{ width: "100%", height: "100%"}} imageStyle={{ opacity: 0.2 }}>
      <View>
        <Image source={logo} style={{ width: 100, height: 120, alignSelf: 'center', marginTop: 30 }} />      
        <Contador/>
      </View>
    </ImageBackground>
  )
}

export default App;




