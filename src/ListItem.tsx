import React, { FC, memo, useCallback } from "react";
import { UseFormReset, UseFormSetValue } from "react-hook-form";
import { Pressable } from "react-native";
import { Text } from "tamagui";

type Props = {
  amenity: string;
  isSelected: boolean;
  reset: UseFormReset<{
    amenities: string[];
  }>;
};

const ListItem: FC<Props> = ({ amenity, isSelected = false, reset }) => {
  const handlePress = useCallback(() => {
    reset((values) => {
      let amenities: string[] = [];

      if (values.amenities && Array.isArray(values.amenities)) {
        if (values.amenities.includes(amenity)) {
          amenities = values.amenities.filter(
            (oldAminity) => oldAminity !== amenity
          );
        } else {
          amenities = [...values.amenities, amenity];
        }
      }
      return { ...values, amenities };
    });
  }, []);

  console.log("Render: ", amenity);

  return (
    <Pressable
      style={{
        borderRadius: 15,
        padding: 8,
        width: 100,
        borderWidth: 0.7,
        marginBottom: 20,
        borderColor: isSelected ? "white" : "black",
        backgroundColor: isSelected ? "#666" : "whitesmoke",
      }}
      onPress={handlePress}
    >
      <Text color={"black"} textAlign="center" fontSize={14}>
        {amenity}
      </Text>
    </Pressable>
  );
};

export default memo(ListItem);
