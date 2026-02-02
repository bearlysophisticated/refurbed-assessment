import { useThemedStyles } from "@/hooks/use-themed-styles";
import { StyleSheet } from "react-native";
import { Spacing } from "@/constants/theme";

export const useDealsListingStyles = () => useThemedStyles((palette => StyleSheet.create({
  list: {
    flex: 1,
    width: "100%",
  },
  columnWrapper: {
    gap: Spacing.s,
  }
})));
