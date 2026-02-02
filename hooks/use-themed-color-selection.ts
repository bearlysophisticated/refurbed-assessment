import { ColorPalette, Colors } from "@/constants/theme";
import { useColorScheme } from "react-native";

export const useThemedColorSelection = (
  selector: (palette: ColorPalette) => string,
) => {
  const theme = useColorScheme() ?? 'light';
  const palette = Colors[theme];
  return selector(palette);
};
