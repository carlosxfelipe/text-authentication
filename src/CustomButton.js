import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const CustomButton = ({ onPress, title }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderWidth: 2,
    borderColor: "#612F74",
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#612F74",
    fontSize: RFPercentage(1.8),
    fontWeight: "bold",
    textAlign: "center",
  },
});
