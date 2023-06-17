import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { Text, View } from "tamagui";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import List from "./List";

const formZodSchema = z.object({
  amenities: z.string().array(),
});
export type FiltersValidationSchemaType = z.infer<typeof formZodSchema>;

const Form: FC = () => {
  const { control, setValue, reset } = useForm<FiltersValidationSchemaType>({
    defaultValues: {
      amenities: [],
    },
    resolver: zodResolver(formZodSchema),
  });

  return (
    <View flex={1}>
      <Text
        color="white"
        textAlign="center"
        fontFamily={"Roboto"}
        fontSize={34}
      >
        List In Form
      </Text>

      <List control={control} reset={reset} />
    </View>
  );
};

export default Form;
