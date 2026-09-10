import { ThemedView } from "@/components/themed-view";
import { Button } from "@/components/ui/button";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import { Image } from "expo-image";
import { router } from "expo-router";
import { StyleSheet, Text, ToastAndroid, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View>
          <Text style={styles.title}>Glhalton Amaro Bezerra de Sousa</Text>
          <Text style={styles.title}>Engenharia de Software</Text>
          <Text style={styles.title}>Bem vindo</Text>
        </View>
        <View>
          <Image
            source={require("../../assets/images/fumo.jpg")}
            style={styles.imagem}
            contentFit="cover"
          />
        </View>
        <View style={styles.buttonsBox}>
          <Button
            titulo="Aperte aqui"
            onPress={() => {
              ToastAndroid.showWithGravity(
                "Você apertou o botão",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
              );
            }}
          />
          <Button
            titulo="Produtos"
            onPress={() => {
              router.push("/products");
            }}
          />
          <Button
            titulo="Informação"
            onPress={() => {
              router.push("/information");
            }}
          />
        </View>
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
    borderRadius: 20,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    paddingVertical: 20,
    alignItems: "center",
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  buttonsBox: {
    gap: 15,
  },
});
