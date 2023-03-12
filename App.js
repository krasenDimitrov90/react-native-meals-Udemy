import { StyleSheet, Text, View, FlatList } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealsDetailsScreen from './screens/MealsDetailsScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#2f1405' },
          headerTintColor: '#ffffff',
          contentStyle: { backgroundColor: '#372824' },
        }}>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen}
            options={{
              title: 'Meals Categories',
            }}
          />
          <Stack.Screen name="MealsOverView" component={MealsOverViewScreen} 
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   }
            // }}
           />
           <Stack.Screen name="MealsDetailsScreen" component={MealsDetailsScreen}
            options={{
              title: 'Meals Details Screen',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    "backgroundColor": "#24180f",
    flex: 1,
  },

});
