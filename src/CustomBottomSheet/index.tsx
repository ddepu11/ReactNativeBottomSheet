import React, {
  ForwardRefRenderFunction,
  PropsWithChildren,
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import BottomSheet, { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import CustomBackdrop from "./CustomBackdrop";
import CustomBackground from "./CustomBackground";
import CustomHandler from "./CustomHandler";

type Props = {};

export type BottomSheetHandleFunctionsType = {
  open: () => void;
  close: () => void;
};

const CustomBottomSheet: ForwardRefRenderFunction<
  BottomSheetHandleFunctionsType,
  PropsWithChildren<Props>
> = ({ children }, forwardedRef) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["40%", "70%"], []);

  const customBackdrop = (props: BottomSheetBackdropProps) => (
    <CustomBackdrop
      {...props}
      handleClose={() => {
        bottomSheetRef.current?.close();
      }}
    />
  );

  useImperativeHandle(forwardedRef, () => ({
    open() {
      bottomSheetRef.current?.expand();
    },
    close() {
      bottomSheetRef.current?.close();
    },
  }));

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={-1}
      keyboardBehavior="extend"
      keyboardBlurBehavior="restore"
      android_keyboardInputMode="adjustResize"
      enablePanDownToClose={true}
      animateOnMount
      backgroundComponent={CustomBackground}
      backdropComponent={customBackdrop}
      handleComponent={CustomHandler}
    >
      {children}
    </BottomSheet>
  );
};

export default memo(forwardRef(CustomBottomSheet));
