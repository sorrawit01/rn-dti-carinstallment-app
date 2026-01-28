import { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

const carlogo = require("../assets/images/carlogo.png");

export default function Index() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/input";
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <Image source={carlogo} style={styles.carlogo} />
      <Text style={styles.appname}>Start Auto Loan</Text>
      <Text style={styles.appnameth}>วางแผนออกรถฉบับมือโปร</Text>
      <ActivityIndicator
        size="large"
        color="#ffffff"
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appname: {
    fontFamily: "Kanit_700Bold",
    fontSize: 25,
    color: "#ffffff",
  },
  appnameth: {
    fontFamily: "Kanit_400Regular",
    fontSize: 20,
    color: "#ffffff",
  },
  carlogo: {
    width: 120,
    height: 120,
  },
  container: {
    flex: 1,
    backgroundColor: "#153df1",
    alignItems: "center",
    justifyContent: "center",
  },
});
