import { PropsWithChildren } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type CardProps = {
  style?: StyleProp<ViewStyle>;
} & PropsWithChildren;
