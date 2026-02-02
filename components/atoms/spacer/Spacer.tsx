import { View } from "react-native";
import { SpacerProps } from "@/components/atoms/spacer/Spacer.types";
import { Spacing } from "@/constants/theme";

export const Spacer: React.FC<SpacerProps> = ({
    direction = "horizontal",
    size = "m",
}) => {
    return (
        <View
            style={{
                height: direction === "horizontal" ? 0 : Spacing[size],
                width: direction === "vertical" ? 0 : Spacing[size],
            }}
        />
    );
};
