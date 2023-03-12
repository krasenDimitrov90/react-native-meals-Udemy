import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { CATEGORIES } from "../data/dummy-data";


const MealsOverViewScreen = ({ route, navigation }) => {

    const { categoryId } = route.params;
    const filteredMeals = MEALS.filter(meal => meal.categoryIds.includes(categoryId));
    const renderMeal = (itemData) => {
        return (
            <MealItem mealData={itemData.item} navigation={navigation} />
        );
    };

    React.useLayoutEffect(() => {
        const title = CATEGORIES.filter(cat => cat.id === categoryId)[0].title;
        navigation.setOptions({
            title: title,
        })
    }, [navigation, categoryId]);

    return (
        <View style={styles.container} >
            <FlatList 
                data={filteredMeals}
                renderItem={renderMeal}
                keyExtractor={(meal) => meal.id}
            />
        </View>
    );
};

export default MealsOverViewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});