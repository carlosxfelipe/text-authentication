import { StyleSheet } from "react-native";

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
  },
  userImage: {
    width: 48,
    height: 48,
    borderRadius: 50,
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  subHeaderText: {
    fontSize: 16,
    color: "white",
  },
  aboutText: {
    marginBottom: 20,
    fontSize: 14,
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
    fontSize: 16,
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
    fontSize: 18,
    fontWeight: "bold",
  },
  normalText: {
    fontSize: 16,
  },
  successText: {
    color: "green",
    marginTop: 10,
  },
});
