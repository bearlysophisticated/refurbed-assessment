import { View } from "react-native";
import { ContentContainerProps } from "@/components/atoms/content-container/ContentContainer.types";
import { useContentContainerStyles } from "@/components/atoms/content-container/UseContentContainer.styles";

export function ContentContainer(props: ContentContainerProps) {
  const styles = useContentContainerStyles(props);
  return <View {...props} style={[styles.container, props.style]}/>;
}
