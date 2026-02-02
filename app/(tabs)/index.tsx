import { DealsListing } from "@/components/organisms/deals-listing/DealsListing";
import { useDealContext } from "@/contexts/deals-context";
import { ContentContainer } from "@/components/atoms/content-container/ContentContainer";
import { Text } from "react-native";

export default function HomeScreen() {
  const { deals, loading } = useDealContext();

  if (loading) {
    return <ContentContainer>
      <Text>Loading...</Text>
    </ContentContainer>;
  }

  return <ContentContainer noVerticalPadding>
    <DealsListing deals={deals}/>
  </ContentContainer>;
}
