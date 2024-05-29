import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from '../../../config/app-theme'
import { useCounterStore } from '../../store/counter-store'

const SettingScreen = () => {

  const incrementBy = useCounterStore( state => state.incrementBy )

  return (
    <View style={styles.container}>
      <Text>Hola</Text>

      <Pressable 
        style={styles.primaryButton}
        onPress={() => incrementBy(1) }
      >
        <Text>+1</Text>
      </Pressable>

      <Pressable 
        style={styles.primaryButton}
        onPress={() => incrementBy(-1) }
      >
        <Text>-1</Text>
      </Pressable>
    </View>
  )
}

export default SettingScreen