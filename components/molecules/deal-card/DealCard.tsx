import { Card } from "@/components/atoms/card/Card";
import { DealCardProps } from "@/components/molecules/deal-card/DealCard.types";
import { Text } from "react-native";
import { useDealCardStyles } from "@/components/molecules/deal-card/DealCard.styles";
import { useRouter } from "expo-router";

export function DealCard({ deal }: DealCardProps) {
  const styles = useDealCardStyles();
  const router = useRouter();

  return <Card style={styles.container} onPress={() => router.navigate(`/deal/${deal.id}`)}>
    <Text>{deal.title}</Text>
    <Text>{deal.description}</Text>
    <Text>Score: {deal.refurbedScore}</Text>
  </Card>;
}
