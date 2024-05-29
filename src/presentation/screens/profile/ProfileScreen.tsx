import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from '../../../config/app-theme'
import { useProfileStore } from '../../store/profile-store'

const ProfileScreen = () => {

  // No se desestructura para evitar renderizados adicionales
  // const { name, email } = useProfileStore()
  const name = useProfileStore( state => state.name )
  const email = useProfileStore( state => state.email )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>
      <Pressable 
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({ name: 'Kevin Cuadros' }) }
      >
        <Text>Cambiar Nombre</Text>
      </Pressable>

      <Pressable 
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({ email: 'KevinDavidCuadros@hotmail.com' }) }
      >
        <Text>Cambiar Email</Text>
      </Pressable>

    </View>
  )
}

export default ProfileScreen