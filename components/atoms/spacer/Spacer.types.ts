import { Spacing } from "@/constants/theme";

export interface SpacerProps {
    direction?: "horizontal" | "vertical";
    size?: keyof typeof Spacing;
}
