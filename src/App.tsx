import { NavigationContainer } from '@react-navigation/native'
import BottomNavigator from './presentation/routes/BottomNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  )
}

export default App