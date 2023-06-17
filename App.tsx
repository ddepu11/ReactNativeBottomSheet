import { useRef } from "react";
import { StyleSheet } from "react-native";
import { Button, TamaguiProvider, View } from "tamagui";

import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import config from "./tamagui.config";
import Form from "./src/Form";
import CustomBottomSheet from "./src/CustomBottomSheet";

type BottomSheetRefType = React.ElementRef<typeof CustomBottomSheet>;

export default function App() {
  // ref
  const bottomSheetRef = useRef<BottomSheetRefType>(null);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" backgroundColor="#333" />

        <TamaguiProvider config={config}>
          <View borderWidth={0} marginTop={40} alignItems="center">
            <Button
              marginTop={20}
              width={"30%"}
              onPress={() => {
                bottomSheetRef.current?.open();
              }}
            >
              Open
            </Button>

            <Button
              marginTop={20}
              width={"30%"}
              onPress={() => {
                bottomSheetRef.current?.close();
              }}
            >
              Close
            </Button>
          </View>

          <CustomBottomSheet ref={bottomSheetRef}>
            <View flex={1}>
              <Form />
            </View>
          </CustomBottomSheet>
        </TamaguiProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
