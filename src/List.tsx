import React, { FC, memo, useCallback } from "react";
import { amenities } from "./constents";
import {
  Control,
  UseFormReset,
  UseFormSetValue,
  useWatch,
} from "react-hook-form";
import ListItem from "./ListItem";
import { View } from "tamagui";
import { FlatList } from "react-native-gesture-handler";

type Props = {
  control: Control<
    {
      amenities: string[];
    },
    any
  >;
  reset: UseFormReset<{
    amenities: string[];
  }>;
};

const List: FC<Props> = ({ control, reset }) => {
  const selectedAmenities = useWatch({ control, name: "amenities" });

  const RenderItem = useCallback(
    ({ item: { name } }: { item: { name: string; id: string } }) => {
      return (
        <ListItem
          reset={reset}
          amenity={name}
          isSelected={
            selectedAmenities && selectedAmenities.includes(name) ? true : false
          }
        />
      );
    },
    [selectedAmenities]
  );

  const KeyExtractor = useCallback(({ id }: { id: string }) => id, []);

  return (
    <View flex={1} marginTop={15} alignItems="center">
      <FlatList
        data={amenities}
        extraData={selectedAmenities}
        numColumns={3}
        renderItem={RenderItem}
        keyExtractor={KeyExtractor}
        removeClippedSubviews
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default memo(List);
