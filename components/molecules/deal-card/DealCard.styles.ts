import { useThemedStyles } from "@/hooks/use-themed-styles";
import { StyleSheet } from "react-native";
import { Spacing } from "@/constants/theme";

export const useDealCardStyles = () => useThemedStyles((palette => StyleSheet.create({
  container: {
    flex: 1,
    gap: Spacing.s,
    aspectRatio: 1,
    maxWidth: "50%",
  }
})));
