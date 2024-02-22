import React, { useState } from "react";
import { IntroData } from "./IntroData";
import { View, Text, StyleSheet } from "react-native";

export default function Intro() {
  const [index, setIndex] = useState<number>(0);
  const NextFun = () => {
    setIndex((state: number) =>
      state < IntroData.length - 1 ? state + 1 : (state = 0)
    );
  };

  return (
    <View style={style.mainView}>
      <View>
        <Text>SKIP</Text>
      </View>
      <View>
        <Text>TEXT AND IMAGE</Text>
        <Text>{IntroData[index].id}</Text>
      </View>
      {index < 3 ? (
        <Text onPress={NextFun}>Next</Text>
      ) : (
        <Text onPress={NextFun}>Finish</Text>
      )}
    </View>
  );
}
const style = StyleSheet.create({
  mainView: {
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    padding: 20,
    alignItems: "center",
    flexDirection: "column",
  },
});
