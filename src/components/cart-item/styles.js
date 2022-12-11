import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 125,
        backgroundColor: COLORS.backgroundLight,
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        borderColor: COLORS.backgroundDark,
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    headerContainer: {

    },
    header: {
        fontSize: 16,
        fontFamily: 'Lato-Bold',
        color: COLORS.text,
        marginBottom: 5,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: {
        flex: 1,
    },
    quantity: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: COLORS.text,
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        fontFamily: 'Lato-Bold',
        color: COLORS.text,
        marginVertical: 10,
    },
});