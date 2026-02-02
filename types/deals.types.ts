export type Deal = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  refurbedScore: number;
  isInSpotlight: boolean;
}
