import React, { ReactElement } from "react";
import { Text, View, StyleSheet } from "react-native";
import colors from "../../constants/colors";

interface INumberContainerProps {
  children: number;
}

const NumberContainer: React.FC<INumberContainerProps> = ({ children }) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 50,
    borderColor: colors.accent,
    borderWidth: 2,
  },
  number: {
    fontWeight: "bold",
    fontSize: 18,
    color: colors.accent,
  },
});

export default NumberContainer;
