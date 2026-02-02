import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { useDealContext } from "@/contexts/deals-context/DealContext";
import { Text } from "react-native";
import { ContentContainer } from "@/components/atoms/content-container/ContentContainer";
import { Spacer } from "@/components/atoms/spacer/Spacer";

export default function Deal() {
  const navigation = useNavigation();
  const { getDealById } = useDealContext();

  const dealId = useLocalSearchParams<{ id: string }>().id;
  const deal = getDealById(dealId);

  useEffect(() => {
    if (deal) {
      navigation.setOptions({ title: deal.title });
    }
  }, [deal, navigation]);

  if (!deal) {
    return <ContentContainer>
      <Text>Deal not found</Text>
    </ContentContainer>;
  }

  return (
    <ContentContainer>
      <Text>{deal.description}</Text>
      <Spacer direction={"vertical"} size={"m"}/>
      <Text>Score: {deal.refurbedScore}</Text>
      <Spacer direction={"vertical"} size={"m"}/>
      <Text>Price: ${deal.price}</Text>
      <Spacer direction={"vertical"} size={"s"}/>
      <Text>Discount: {deal.discountPercentage}%</Text>
    </ContentContainer>
  );
}
