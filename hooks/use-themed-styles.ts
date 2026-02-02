import { ColorPalette, Colors } from '@/constants/theme';
import { StyleSheet, useColorScheme } from "react-native";
import NamedStyles = StyleSheet.NamedStyles;

export const useThemedStyles = <T extends NamedStyles<T> | NamedStyles<any>>(
  // Use same type as StyleSheet.create
  styleBlock: (palette: ColorPalette) => T & NamedStyles<any>,
): T => {
  const theme = useColorScheme() ?? 'light';
  const palette = Colors[theme];
  return styleBlock(palette);
};
