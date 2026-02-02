import { DealsListingProps } from "@/components/organisms/deals-listing/DealsListing.types";
import { FlatList } from "react-native";
import { DealCard } from "@/components/molecules/deal-card/DealCard";
import { useDealsListingStyles } from "@/components/organisms/deals-listing/DealsListing.styles";
import { Spacer } from "@/components/atoms/spacer/Spacer";
import { useDealImpressionTracker } from "@/hooks/use-deal-impression-tracker";

const ItemSeparator = () => <Spacer direction={"vertical"} size={"s"} />;
const ListHeader = () => <Spacer direction={"vertical"} size={"m"} />;

export function DealsListing({ deals }: DealsListingProps) {
  const styles = useDealsListingStyles();
  const { onViewAbleDealsChangedHandler } = useDealImpressionTracker();

  return <FlatList
    style={styles.list}
    numColumns={2}
    data={deals}
    keyExtractor={item => item.id}
    renderItem={({ item }) => <DealCard deal={item}/>}
    columnWrapperStyle={styles.columnWrapper}
    ItemSeparatorComponent={ItemSeparator}
    ListHeaderComponent={ListHeader}
    viewabilityConfig={{
      itemVisiblePercentThreshold: 50,
    }}
    onViewableItemsChanged={(info) => {
      const newViewableDealIds = info.viewableItems.map(item => item.item.id);
      onViewAbleDealsChangedHandler({ newViewableDealIds })}
    }
  />;
}
