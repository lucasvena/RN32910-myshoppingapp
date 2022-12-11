import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 10,
        borderBottomColor: COLORS.primaryDark,
        borderBottomWidth: 1,
        backgroundColor: COLORS.primary,
        height: 85,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        justifyContent: 'center',
    },
    headerContainer: {},
    date: {
        fontSize: 12,
        fontFamily: 'Lato-Regular',
    },
    contentContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
    },
    content :{

    },
    total: {
        fontSize: 16,
        fontFamily: 'Lato-Bold',
    },
});