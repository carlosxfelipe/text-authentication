import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 0.3,
    padding: 16,
    backgroundColor: "#BA4DE3",
  },
  userContainer: {
    marginTop: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: RFValue(32),
    height: RFValue(32),
    borderRadius: 50,
    marginRight: 10,
  },
  headerText: {
    fontSize: RFPercentage(2),
    fontWeight: "bold",
    color: "white",
  },
  subHeaderText: {
    fontSize: RFPercentage(1.6),
    color: "white",
  },
  aboutText: {
    marginBottom: 20,
    fontSize: RFPercentage(1.4),
    color: "black",
    textAlign: "justify",
  },
  inputContainer: {
    padding: 16,
    justifyContent: "center",
    marginTop: 10,
  },
  inputField: {
    backgroundColor: "#F1F3F4",
    color: "black",
    fontSize: RFPercentage(1.6),
    height: 120,
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },
  resultContainer: {
    flex: 1,
    padding: 16,
  },
  resultText: {
    marginTop: 20,
    fontSize: RFPercentage(1.8),
    fontWeight: "bold",
  },
  normalText: {
    fontSize: RFPercentage(1.6),
  },
  successText: {
    color: "green",
    marginTop: 10,
  },
});
