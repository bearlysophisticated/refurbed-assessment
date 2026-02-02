import { View } from "react-native";
import { useDealContext } from "@/contexts/deals-context/DealContext";
import { FilterButton } from "@/components/atoms/filter-button/FilterButton";
import { styles } from "@/components/molecules/deals-filter/DealsFilter.styles";

export function DealsFilter() {
  const { applySorting } = useDealContext();

  return <View style={styles.container}>
    <FilterButton title="Price asc" onPress={() => {
      applySorting('price-asc');
    }}/>
    <FilterButton title="Price desc" onPress={() => {
      applySorting('price-desc');
    }}/>
    <FilterButton title="Score asc" onPress={() => {
      applySorting('score-asc');
    }}/>
    <FilterButton title="Score desc" onPress={() => {
      applySorting('score-desc');
    }}/>
    <FilterButton title="Reset" onPress={() => {
      applySorting();
    }}/>
  </View>;
}
