import { StyleSheet, Text, View, Pressable, Image, Platform } from "react-native";
import MealDetails from "./MealDetails";

const MealItem = ({ mealData, navigation }) => {

    const {
        title,
        imageUrl,
        affordability,
        complexity,
        duration, } = mealData;

    const hadleMealPress = () => {
        navigation.navigate("MealsDetailsScreen", { mealData: mealData });
    };

    return (
        <View style={styles.mealContainer}>
            <Pressable
                onPress={hadleMealPress}
                android_ripple={{ color: '#ccc' }}
            >
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.mealTitle} >{title}</Text>
                </View>
                {/* <View style={styles.description}>
                    <Text style={styles.descriptionItem} >{duration}m</Text>
                    <Text style={styles.descriptionItem} >{complexity.toUpperCase()}</Text>
                    <Text style={styles.descriptionItem} >{affordability.toUpperCase()}</Text>
                </View> */}
                <MealDetails
                    duration={duration}
                    complexity={complexity}
                    affordability={affordability}
                />
            </Pressable>
        </View>
    );
};

export default MealItem;

const styles = StyleSheet.create({
    mealContainer: {
        flex: 1,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        // for IOS
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 4,
        margin: 20,
    },
    image: {
        width: '100%',
        height: 200,
    },
    mealTitle: {
        marginVertical: 10,
        flex: 1,
        textAlign: 'center',
    },
});