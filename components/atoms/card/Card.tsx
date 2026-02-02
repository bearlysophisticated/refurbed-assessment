import { View } from "react-native";
import { CardProps } from "@/components/atoms/card/Card.types";
import { useCardStyles } from "@/components/atoms/card/Card.styles";

export function Card({
  style,
  children,
}: CardProps) {
  const styles = useCardStyles();
  return <View style={[styles.container, style]}>{children}</View>;
}
