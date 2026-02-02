import { useDealsInSpotlight } from "@/hooks/use-deals-in-spotlight";
import { ContentContainer } from "@/components/atoms/content-container/ContentContainer";
import { DealsListing } from "@/components/organisms/deals-listing/DealsListing";
import { Text } from "react-native";

export default function DealsSpotlight() {
  const { dealsInSpotlight, loading } = useDealsInSpotlight();

  if (loading) {
    return <ContentContainer>
      <Text>Loading...</Text>
    </ContentContainer>;
  }

  return (
    <ContentContainer noVerticalPadding>
      <DealsListing deals={dealsInSpotlight}/>
    </ContentContainer>
  );
}
