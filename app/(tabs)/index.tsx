import { DealsListing } from "@/components/organisms/deals-listing/DealsListing";
import { useDealContext } from "@/contexts/deals-context/DealContext";
import { ContentContainer } from "@/components/atoms/content-container/ContentContainer";
import { Text } from "react-native";
import { DealsFilter } from "@/components/molecules/deals-filter/DealsFilter";

export default function HomeScreen() {
  const { deals, loading } = useDealContext();

  if (loading) {
    return <ContentContainer>
      <Text>Loading...</Text>
    </ContentContainer>;
  }

  return <ContentContainer noVerticalPadding>
    <DealsFilter/>
    <DealsListing deals={deals}/>
  </ContentContainer>;
}
