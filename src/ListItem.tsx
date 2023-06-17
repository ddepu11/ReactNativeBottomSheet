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

  // console.log("Render: ", amenity);

  return (
    <Pressable
      style={{
        borderRadius: 15,
        padding: 8,
        width: 100,
        borderWidth: 1,
        marginBottom: 22,
        marginRight: 15,
        borderColor: isSelected ? "#F8E8EE" : "black",
        backgroundColor: isSelected ? "#526D82" : "#FFF4F4",
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
