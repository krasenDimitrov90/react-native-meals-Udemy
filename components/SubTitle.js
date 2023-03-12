import { Text, View, StyleSheet } from "react-native";

const SubTitle = ({ children }) => {

    return (
        <View style={styles.root}>
            <Text style={styles.title}>{children}</Text>
        </View>
    );
};

export default SubTitle;

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 40,
        marginVertical: 8,
    },
    title: {
        color: '#ddab8e',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 2,
        borderBottomColor: '#ddab8e',
        borderBottomWidth: 2,
    },
});