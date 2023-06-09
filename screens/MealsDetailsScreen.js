import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/SubTitle";
import Details from "../components/Details";
import IconButton from "../components/IconButton";


const MealsDetailsScreen = ({ route, navigation }) => {

    const { mealData } = route.params;

    const {
        title,
        imageUrl,
        ingredients,
        steps,
        affordability,
        complexity,
        duration, } = mealData;

    const handleIconPress = () => {
        console.log('Pressed');
    };

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton color={'#ffffff'} onPress={handleIconPress} />
            }
        });
    },[navigation]);

    return (
        <ScrollView style={styles.root}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.mainTitle}>{title}</Text>
            <MealDetails
                duration={duration}
                complexity={complexity}
                affordability={affordability}
                textStyle={styles.subTitleDetails}
            />
            <View>
                <SubTitle>Ingredients</SubTitle>
                {ingredients.map(i => <Details key={i} >{i}</Details>)}
            </View>
            <View>
                <SubTitle>Steps</SubTitle>
                <View>
                    {steps.map((s, i) => <Details key={s}>{i + 1}. {s}</Details>)}
                </View>
            </View>
        </ScrollView>
    );
};

export default MealsDetailsScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        marginBottom: 40,
    },
    image: {
        width: '100%',
        height: 250,
    },
    mainTitle: {
        color: "#f7d7d7",
        textAlign: 'center',
        margin: 12,
        fontSize: 24,
    },
    subTitleDetails: {
        color: "#f7d7d7",
        fontSize: 12,

    },
});