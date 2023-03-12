import { StyleSheet, Text, View } from "react-native";


const MealDetails = ({
    duration,
    complexity,
    affordability,
    textStyle }) => {

    return (
        <View style={styles.description}>
            <Text style={[styles.descriptionItem, textStyle]} >{duration}m</Text>
            <Text style={[styles.descriptionItem, textStyle]} >{complexity.toUpperCase()}</Text>
            <Text style={[styles.descriptionItem, textStyle]} >{affordability.toUpperCase()}</Text>
        </View>
    );
};

export default MealDetails;

const styles = StyleSheet.create({
    description: {
        flexDirection: 'row',
        // flex: 1,
        justifyContent: 'center',
    },
    descriptionItem: {
        marginHorizontal: 10,
    },
});