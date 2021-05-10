import { StyleSheet } from "react-native";
import colors from "app/styles/Colors";

export default StyleSheet.create({
    //MAIN
    mainContainer: {
        flex: 1,
        backgroundColor: colors.lightOrange,
    },

    //HEADER
    headerBackground: {
        backgroundColor: colors.lightOrange,
        height: 170,
        justifyContent: "center",
    },
    headerDescription: {
        color: colors.lightGray,
        fontFamily: "OpenSans",
        fontSize: 15,
        marginLeft: "20%"
    },

    headerTextContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        color: colors.white,
        fontSize: 70,
        fontFamily: "MarkProBold",
    },
    headerTextKG: {
        paddingLeft: 15,
        fontSize: 15,
        paddingTop: 35,
        color: colors.white,
        fontFamily: "OpenSans",
    },
    headerResetContainer: {
        width: 70,
        height: 30,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "20%",
    },
    headerReset: {
        color: colors.lightGray,
        fontFamily: "OpenSans",
        fontSize: 18,
    },

    //LIST
    listContainer: {
        width: "100%",
        height: "80%",
        backgroundColor: colors.darkGray,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        borderWidth: 1,
        borderColor: colors.darkGray,
        alignItems: "center",
        paddingBottom: 15
    },

    //CHIP
    chipContainer: {
        height: 35,
        width: 150,
        borderColor: colors.brightOrange,
        borderWidth: 2,
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 20,
        justifyContent: "center"
    },
    chipText: {
        alignSelf: "center",
        fontSize: 15,
        fontFamily: "OpenSans",
        color: colors.white,
        fontWeight: "bold"
    },
    chipUsed: {
        backgroundColor: colors.orange,
        borderColor: colors.brightOrange
    },
    chipBanned: {
        backgroundColor: colors.highlightGray,
        borderColor: colors.lightGray
    },

    //INPUT
    inputContainer: {
        marginTop: 10,
        marginBottom: 15,
        width: "50%",
        borderBottomColor: colors.brightOrange,
        borderBottomWidth: 1,
        height: 30
    },
    inputInput: {
        color: colors.white,
        fontFamily: "MarkProBold",
        fontSize: 25,
        textAlign: "center"
    }
});
