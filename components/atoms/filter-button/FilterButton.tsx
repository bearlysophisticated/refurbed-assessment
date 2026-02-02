import { Button, View } from "react-native";
import { FilterButtonProps } from "@/components/atoms/filter-button/FilterButton.types";
import { styles } from "@/components/atoms/filter-button/FilterButton.styles";

export function FilterButton(props: FilterButtonProps) {
  return <View style={styles.button}>
    <Button {...props}/>
  </View>;
}
