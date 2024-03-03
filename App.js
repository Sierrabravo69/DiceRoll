import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useState } from 'react'

import diceOne from './assets/One.png'
import diceTwo from './assets/Two.png'
import diceThree from './assets/Three.png'
import diceFour from './assets/Four.png'
import diceFive from './assets/Five.png'
import diceSix from './assets/Six.png'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import {trigger} from 'react-native-haptic-feedback'

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl})=>{
  console.log("imageUrl", imageUrl);
  return(
    <View>
      <Image  style={styles.diceImage} source={imageUrl}/>
    </View>
  )
}

export default function App() {
  const [diceImage, setDiceImage] = useState(diceOne)

  const rollDice = () => {
    let number = Math.floor(Math.random()*6)+1
    console.log(number);
    // console.log(diceImage, "asldfajsldkf");

    switch (number) {
      case 1: {
        setDiceImage(diceOne)
        break;
      }
        
      case 2:
        setDiceImage(diceTwo)
        break;
      case 3:
        setDiceImage(diceThree)
        break;
      case 4:
        setDiceImage(diceFour)
        break;
      case 5:
        setDiceImage(diceFive)
        break;
      case 6:
        setDiceImage(diceSix)
        break;
    
      default:
        setDiceImage(diceOne)
        break;
    }
    // Trigger haptic feedback
    trigger("impactLight", options);
  }
console.log("diceImage", diceImage);
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      {/* <Image source={diceOne}/> */}
      <Pressable onPress={rollDice}>
        <Text style={styles.rollDiceBtnText}>Roll the Dice</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
})