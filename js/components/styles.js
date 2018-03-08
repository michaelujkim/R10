import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  time: {
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#e6e6e6",
    fontFamily: "Montserrat"
  },
  entry: {
    fontFamily: "Montserrat",
    padding: 10
  },
  entryContainer: {
    flex: 1,
    flexDirection: "column"
  },

  location: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  }
});
