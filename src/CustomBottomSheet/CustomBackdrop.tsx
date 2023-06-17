import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import React, { FC, useMemo } from "react";
import { Dimensions, Pressable } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const CustomBackdrop: FC<
  BottomSheetBackdropProps & { handleClose: () => void }
> = ({ style, animatedIndex, handleClose }) => {
  const height = Dimensions.get("screen").height;

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [0, 1],
      [0.9, 1],
      Extrapolate.CLAMP
    ),

    height: interpolate(
      animatedIndex.value,
      [0, 1],
      [0, height],
      Extrapolate.CLAMP
    ),
  }));

  // styles
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: "#a8b5eb",
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle]
  );

  const APressable = Animated.createAnimatedComponent(Pressable);

  return (
    <APressable
      onPress={handleClose}
      // pointerEvents={!isOpen ? "none" : "auto"}
      style={containerStyle}
    />
  );
};

export default CustomBackdrop;
