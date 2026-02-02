import { Button, View } from "react-native";
import { FilterButtonProps } from "@/components/atoms/filter-button/FilterButton.types";
import { styles } from "@/components/atoms/filter-button/FilterButton.styles";

export function FilterButton({ title, onPress }: FilterButtonProps) {
  return <View style={styles.button}>
    <Button title={title} onPress={onPress}/>
  </View>;
}
