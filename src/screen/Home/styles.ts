import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#1A1A1A",
  },
  form: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: -54,
  },
  addTask: {
    flex: 1,
    height: 54,
    backgroundColor: "#262626",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#0D0D0D",
    padding: 16,
    fontSize: 16,
    color: "#fff",
  },
  button: {
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
  },
  content: {
    marginTop: 32,
  },
  contentHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrapperCreateAndConcludedText: {
    flexDirection: "row",
    gap: 8,
  },
  textCreate: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4EA8DE",
  },
  textConcluded: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#8284FA",
  },
  numberCreateAndConcluded: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#333333",
    borderRadius: 999,
    paddingVertical: 2,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  containerTasks: {
    borderColor: "#808080",
    borderTopWidth: 1,
    marginTop: 20,
  },
  notTasksContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 48,
  },
  textNotTasks: {
    fontSize: 14,
    color: "#808080",
    textAlign: "center",
  },
  textNotTasksStrong: {
    width: "100%",
    flex: 1,
    fontSize: 14,
    fontWeight: "bold",
    color: "#808080",
    textAlign: "center",
    marginTop: 16,
  },
});
