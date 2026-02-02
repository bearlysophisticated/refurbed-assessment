import { StyleSheet } from "react-native";
import { Radius, Spacing } from "@/constants/theme";
import { useThemedStyles } from "@/hooks/use-themed-styles";

export const useCardStyles = () => useThemedStyles((palette => StyleSheet.create({
  container: {
    padding: Spacing.s,
    borderRadius: Radius.l,
    borderWidth: 4,
    borderColor: palette.border,
    backgroundColor: palette.card,
  }
})));
