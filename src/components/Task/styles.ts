import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginTop: 20,
    backgroundColor: "#262626",
    borderRadius: 8,
    borderColor: "#333333",
    borderWidth: 1,
  },
  checkBox: {
    width: 24,
    height: 24,
    borderColor: "#4EA8DE",
    borderWidth: 2,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  checkBoxAtived: {
    backgroundColor: "#5E60CE",
  },
  textTask: {
    fontSize: 14,
    color: "#fff",
    marginHorizontal: 8,
    width: 235,
  },
  finished: {
    textDecorationLine: "line-through",
    opacity: 0.7,
  },
});
