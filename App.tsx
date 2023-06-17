import { StyleSheet } from "react-native";
import { TamaguiProvider, View } from "tamagui";

import config from "./tamagui.config";
import Form from "./src/Form";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#333" />
      <TamaguiProvider config={config}>
        <View flex={1} backgroundColor={"blueviolet"}>
          <Form />
        </View>
      </TamaguiProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
