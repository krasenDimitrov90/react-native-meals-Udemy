import { StyleSheet, Pressable, Text, View, Platform } from "react-native";


const CategorieGridTile = ({ title, color, onPress }) => {

    return (
        <View style={styles.gridItem} >
            <Pressable
                android_ripple={{ color: '#cccccc' }}
                style={({ pressed }) => [styles.btn, pressed ? styles.btnPressed : null, { backgroundColor: color }]}
                onPress={onPress}
                >
                <View>
                    <Text style={[styles.itemTitle, ]}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default CategorieGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        height: 150,
        elevation: 4,
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',

        // for IOS
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    btn: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnPressed: {
        opacity: 0.5,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});