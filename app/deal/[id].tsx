import { useFocusEffect, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";

export default function Deal() {
  const navigation = useNavigation();

  const dealId = useLocalSearchParams<{ id: string }>().id;

  const deal = {
    id: '1',
    title: 'Deal 1',
    description: 'Deal 1 description',
    imageUrl: 'https://via.placeholder.com/150',
  };

  useEffect(() => {
      navigation.setOptions({ title: deal.title });
  }, [deal, navigation]);

  return (
    <>
    {/*  TODO implement */}
    </>
  );
}
