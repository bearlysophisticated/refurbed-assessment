import { Card } from "@/components/atoms/card/Card";
import { DealCardProps } from "@/components/molecules/deal-card/DealCard.types";
import { Text } from "react-native";
import { useDealCardStyles } from "@/components/molecules/deal-card/DealCard.styles";

export function DealCard({ deal }: DealCardProps) {
  const styles = useDealCardStyles();

  return <Card style={styles.container}>
    <Text>{deal.title}</Text>
    <Text>{deal.description}</Text>
  </Card>;
}
