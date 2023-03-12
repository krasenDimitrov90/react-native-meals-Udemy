import { FlatList, StyleSheet } from "react-native";
import CategorieGridTile from "../components/CategorieGridTile";
import { CATEGORIES } from "../data/dummy-data";




const CategoriesScreen = ({ navigation }) => {

    const CategorieItems = (itemData) => {
        const pressHandler = () => {
            navigation.navigate('MealsOverView', { categoryId: itemData.item.id });
        };

        return (<CategorieGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={pressHandler}
        />);
    };

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={CategorieItems}
            keyExtractor={(item) => item.id}
            numColumns={2}
            style={styles.itemsContainer}
        />
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
    itemsContainer: {
        flex: 1,
    },
});