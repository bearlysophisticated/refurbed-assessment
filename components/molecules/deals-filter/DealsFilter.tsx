import { Text, TextInput, View } from "react-native";
import { useDealContext } from "@/contexts/deals-context/DealContext";
import { FilterButton } from "@/components/atoms/filter-button/FilterButton";
import { styles } from "@/components/molecules/deals-filter/DealsFilter.styles";
import { useState } from "react";

export function DealsFilter() {
  const { applySorting, applyFilter } = useDealContext();
  const [minimumScore, setMinimumScore] = useState<number | undefined>(undefined);

  return <View><View style={styles.row}>
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
  </View>
    <View style={styles.row}>
      <Text>With score at least:</Text>
      <TextInput
        style={styles.input}
        placeholder={"00"}
        onChangeText={(text) => {
          setMinimumScore(Number(text) ?? undefined);
        }}
        keyboardType={"numeric"}
        defaultValue={minimumScore?.toString()}/>
      <FilterButton title={"Go"} onPress={() => applyFilter({
        name: 'minimum-score',
        value: minimumScore
      })} disabled={minimumScore === undefined}/>
      <FilterButton title={"Reset"} onPress={() => {
        setMinimumScore(undefined);
        applyFilter();
      }}/>
    </View>
  </View>;
}
