import { DealsListing } from "@/components/organisms/deals-listing/DealsListing";

export default function HomeScreen() {
  return (
    <DealsListing deals={[{
      id: '1',
      title: 'Deal 1',
      description: 'Deal 1 description',
      imageUrl: 'https://via.placeholder.com/150',
    }, {
      id: '2',
      title: 'Deal 2',
      description: 'Deal 2 description',
      imageUrl: 'https://via.placeholder.com/150',
    }, {
      id: '3',
      title: 'Deal 3',
      description: 'Deal 3 description',
      imageUrl: 'https://via.placeholder.com/150',
    }, {
      id: '4',
      title: 'Deal 4',
      description: 'Deal 4 description',
      imageUrl: 'https://via.placeholder.com/150',
    }, {
      id: '5',
      title: 'Deal 5',
      description: 'Deal 5 description',
      imageUrl: 'https://via.placeholder.com/150',
    }]} />
  );
}
