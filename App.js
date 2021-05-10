import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, StatusBar, ScrollView } from "react-native";
import colors from "app/styles/Colors";
import * as Font from "expo-font";
import MainScreen from "app/screens/MainScreen";

export default function App() {

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    loadFonts(setLoaded);
  }, [])

  return (
    <SafeAreaView style={mainStyles.mainSafeArea}>
        {loaded && (
            <MainScreen/>
        )}
    </SafeAreaView>
  );
}

const mainStyles = StyleSheet.create({
  mainSafeArea: {
    flex: 1,
    backgroundColor: Platform.OS === "android" ? colors.lightOrange : colors.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});

const loadFonts = (setLoaded) => {
  Font.loadAsync({
      MarkProBold: require("./app/assets/fonts/MarkProBold.otf"),
      OpenSans: require("./app/assets/fonts/OpenSans.otf"),
  }).then(function () {
      setLoaded(true);
  })
}
