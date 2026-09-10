import { ThemedView } from "@/components/themed-view";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function information() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView>
        <View></View>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  imagem: {
    height: 200,
    width: 200,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
});
