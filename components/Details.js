import { Text, View, StyleSheet } from "react-native";


const Details = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text} >{children}</Text>
        </View>
    );
};

export default Details;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
    },
    text: {
        backgroundColor: '#ddaa91',
        marginVertical: 2,
        padding: 6,
        borderRadius: 8,
        textAlign: 'center',
    },
});