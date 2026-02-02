import { Card } from "@/components/atoms/card/Card";
import { DealCardProps } from "@/components/molecules/deal-card/DealCard.types";
import { Text } from "react-native";
import { useDealCardStyles } from "@/components/molecules/deal-card/DealCard.styles";
import { useRouter } from "expo-router";
import { useAnalytics } from "@/hooks/use-analytics";

export function DealCard({ deal }: DealCardProps) {
  const styles = useDealCardStyles();
  const router = useRouter();
  const { logEvent } = useAnalytics();

  const priceLabel = deal.discountPercentage ? `$${deal.price} - ${deal.discountPercentage}% off` : `$${deal.price}`;

  const onPressHandler = () => {
    router.navigate(`/deal/${deal.id}`);
    logEvent({ eventName: 'deal_click', dealId: deal.id });
  };

  return <Card style={styles.container} onPress={onPressHandler}>
    <Text>{deal.title}</Text>
    <Text>{deal.description}</Text>
    <Text>{priceLabel}</Text>
    <Text>Score: {deal.refurbedScore}</Text>
  </Card>;
}
