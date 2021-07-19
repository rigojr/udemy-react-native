import React, { ReactElement } from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface ICardProps {
  children: ReactElement | ReactElement[];
  customStyle: StyleProp<ViewStyle>
}

const Card: React.FC<ICardProps> = ({ children, customStyle }) => {
  return <View style={[styles.card, customStyle]} >{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    backgroundColor: "white",
    padding: 30,
    borderRadius: 30,
  },
});

export default Card;
