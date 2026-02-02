import { useThemedStyles } from "@/hooks/use-themed-styles";
import { StyleSheet } from "react-native";
import { Spacing } from "@/constants/theme";

export const useDealsListingStyles = () => useThemedStyles((palette => StyleSheet.create({
  list: {
    paddingHorizontal: Spacing.s,
  },
  columnWrapper: {
    gap: Spacing.s,
  }
})));
