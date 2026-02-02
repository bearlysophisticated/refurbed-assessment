import { TouchableOpacity } from "react-native";
import { CardProps } from "@/components/atoms/card/Card.types";
import { useCardStyles } from "@/components/atoms/card/Card.styles";
import { TOUCHABLE_OPACITY } from "@/constants/theme";

export function Card({
  children,
  style,
  ...props
}: CardProps) {
  const styles = useCardStyles();
  return <TouchableOpacity {...props} activeOpacity={TOUCHABLE_OPACITY}
                           style={[styles.container, style]}>{children}</TouchableOpacity>;
}
