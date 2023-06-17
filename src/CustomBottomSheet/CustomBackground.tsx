import { BottomSheetBackgroundProps } from "@gorhom/bottom-sheet";
import React, { FC, useMemo } from "react";
import { View } from "react-native";
import Animated from "react-native-reanimated";

const CustomBackground: FC<BottomSheetBackgroundProps> = ({ style }) => {
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: "#555",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderWidth: 0.8,
        borderColor: "#000",
      },
    ],
    [style]
  );

  return <Animated.View style={containerStyle} />;
};

export default CustomBackground;
