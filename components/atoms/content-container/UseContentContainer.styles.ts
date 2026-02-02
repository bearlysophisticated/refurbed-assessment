import { ContentContainerProps } from "@/components/atoms/content-container/ContentContainer.types";
import { useThemedStyles } from "@/hooks/use-themed-styles";
import { StyleSheet } from "react-native";
import { Spacing } from "@/constants/theme";

export const useContentContainerStyles = ({ noVerticalPadding }: ContentContainerProps) => useThemedStyles((palette => StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spacing.s,
    paddingVertical: noVerticalPadding ? 0 : Spacing.m,
    backgroundColor: palette.background,
    alignItems: 'center',
  }
})));
