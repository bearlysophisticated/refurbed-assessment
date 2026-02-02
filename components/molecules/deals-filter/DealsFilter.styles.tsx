import { StyleSheet } from "react-native";
import { Spacing } from "@/constants/theme";

export const styles = StyleSheet.create({
  row: {
    width: "100%",
    flexDirection: "row",
    gap: Spacing.s,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  input: {
    flex: 1
  }
});
