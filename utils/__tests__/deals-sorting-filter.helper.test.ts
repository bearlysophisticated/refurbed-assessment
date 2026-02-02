import { sortAndFilterDeals } from '../deals-sorting-filter.helper';
import { Deal, DealFilter } from '@/types/deals.types';

describe('sortAndFilterDeals', () => {
  const mockDeals: Deal[] = [
    {
      id: '1',
      title: 'iPhone 13 Pro',
      description: 'Refurbished iPhone 13 Pro in excellent condition',
      price: 799,
      discountPercentage: 15,
      refurbedScore: 95,
      isInSpotlight: true,
    },
    {
      id: '2',
      title: 'MacBook Air M2',
      description: 'Like-new MacBook Air with M2 chip',
      price: 1099,
      discountPercentage: 20,
      refurbedScore: 88,
      isInSpotlight: false,
    },
    {
      id: '3',
      title: 'iPad Pro 11"',
      description: 'Refurbished iPad Pro with Apple Pencil support',
      price: 649,
      refurbedScore: 72,
      isInSpotlight: true,
    },
    {
      id: '4',
      title: 'Samsung Galaxy S23',
      description: 'Premium refurbished Samsung flagship',
      price: 699,
      discountPercentage: 25,
      refurbedScore: 91,
      isInSpotlight: true,
    },
    {
      id: '5',
      title: 'AirPods Pro 2',
      description: 'Certified refurbished with active noise cancellation',
      price: 299,
      refurbedScore: 67,
      isInSpotlight: false,
    },
  ];

  describe('without sorting or filtering', () => {
    it('should return a copy of the original array when no sort or filter is provided', () => {
      const result = sortAndFilterDeals(mockDeals);

      expect(result).toEqual(mockDeals);
      expect(result).not.toBe(mockDeals); // Should be a new array
    });

    it('should not mutate the original array', () => {
      const originalDeals = [...mockDeals];
      sortAndFilterDeals(mockDeals, 'price-asc');

      expect(mockDeals).toEqual(originalDeals);
    });
  });

  describe('sorting', () => {
    describe('price-asc', () => {
      it('should sort deals by price in ascending order', () => {
        const result = sortAndFilterDeals(mockDeals, 'price-asc');

        expect(result[0].id).toBe('5'); // AirPods Pro 2 - $299
        expect(result[1].id).toBe('3'); // iPad Pro - $649
        expect(result[2].id).toBe('4'); // Samsung Galaxy - $699
        expect(result[3].id).toBe('1'); // iPhone - $799
        expect(result[4].id).toBe('2'); // MacBook - $1099
      });
    });

    describe('price-desc', () => {
      it('should sort deals by price in descending order', () => {
        const result = sortAndFilterDeals(mockDeals, 'price-desc');

        expect(result[0].id).toBe('2'); // MacBook - $1099
        expect(result[1].id).toBe('1'); // iPhone - $799
        expect(result[2].id).toBe('4'); // Samsung Galaxy - $699
        expect(result[3].id).toBe('3'); // iPad Pro - $649
        expect(result[4].id).toBe('5'); // AirPods Pro 2 - $299
      });
    });

    describe('score-asc', () => {
      it('should sort deals by refurbedScore in ascending order', () => {
        const result = sortAndFilterDeals(mockDeals, 'score-asc');

        expect(result[0].refurbedScore).toBe(67);
        expect(result[1].refurbedScore).toBe(72);
        expect(result[2].refurbedScore).toBe(88);
        expect(result[3].refurbedScore).toBe(91);
        expect(result[4].refurbedScore).toBe(95);
      });
    });

    describe('score-desc', () => {
      it('should sort deals by refurbedScore in descending order', () => {
        const result = sortAndFilterDeals(mockDeals, 'score-desc');

        expect(result[0].refurbedScore).toBe(95);
        expect(result[1].refurbedScore).toBe(91);
        expect(result[2].refurbedScore).toBe(88);
        expect(result[3].refurbedScore).toBe(72);
        expect(result[4].refurbedScore).toBe(67);
      });
    });
  });

  describe('filtering', () => {
    describe('minimum-score filter', () => {
      it('should filter deals with refurbedScore >= minimum score', () => {
        const filter: DealFilter = { name: 'minimum-score', value: 80 };
        const result = sortAndFilterDeals(mockDeals, undefined, filter);

        expect(result).toHaveLength(3);
        expect(result.every(deal => deal.refurbedScore >= 80)).toBe(true);
      });

      it('should return all deals when minimum score is 0', () => {
        const filter: DealFilter = { name: 'minimum-score', value: 0 };
        const result = sortAndFilterDeals(mockDeals, undefined, filter);

        expect(result).toHaveLength(5);
      });

      it('should return empty array when minimum score is higher than all scores', () => {
        const filter: DealFilter = { name: 'minimum-score', value: 100 };
        const result = sortAndFilterDeals(mockDeals, undefined, filter);

        expect(result).toHaveLength(0);
      });

      it('should filter deals with exact minimum score', () => {
        const filter: DealFilter = { name: 'minimum-score', value: 88 };
        const result = sortAndFilterDeals(mockDeals, undefined, filter);

        expect(result).toHaveLength(3);
        expect(result.map(d => d.id)).toEqual(expect.arrayContaining(['1', '2', '4']));
      });
    });
  });

  describe('combined sorting and filtering', () => {
    it('should filter first, then sort by price ascending', () => {
      const filter: DealFilter = { name: 'minimum-score', value: 85 };
      const result = sortAndFilterDeals(mockDeals, 'price-asc', filter);

      expect(result).toHaveLength(3);
      expect(result[0].id).toBe('4'); // Samsung - $699, score 91
      expect(result[1].id).toBe('1'); // iPhone - $799, score 95
      expect(result[2].id).toBe('2'); // MacBook - $1099, score 88
    });

    it('should filter first, then sort by score descending', () => {
      const filter: DealFilter = { name: 'minimum-score', value: 70 };
      const result = sortAndFilterDeals(mockDeals, 'score-desc', filter);

      expect(result).toHaveLength(4);
      expect(result[0].refurbedScore).toBe(95);
      expect(result[1].refurbedScore).toBe(91);
      expect(result[2].refurbedScore).toBe(88);
      expect(result[3].refurbedScore).toBe(72);
    });

    it('should handle filtering that results in empty array', () => {
      const filter: DealFilter = { name: 'minimum-score', value: 100 };
      const result = sortAndFilterDeals(mockDeals, 'price-asc', filter);

      expect(result).toHaveLength(0);
    });
  });

  describe('edge cases', () => {
    it('should handle empty deals array', () => {
      const result = sortAndFilterDeals([]);

      expect(result).toEqual([]);
    });

    it('should handle empty deals array with sorting', () => {
      const result = sortAndFilterDeals([], 'price-asc');

      expect(result).toEqual([]);
    });

    it('should handle empty deals array with filtering', () => {
      const filter: DealFilter = { name: 'minimum-score', value: 50 };
      const result = sortAndFilterDeals([], undefined, filter);

      expect(result).toEqual([]);
    });

    it('should handle single deal', () => {
      const singleDeal = [mockDeals[0]];
      const result = sortAndFilterDeals(singleDeal, 'price-desc');

      expect(result).toHaveLength(1);
      expect(result[0]).toEqual(mockDeals[0]);
    });

    it('should handle deals with same price', () => {
      const dealsWithSamePrice: Deal[] = [
        { ...mockDeals[0], price: 500 },
        { ...mockDeals[1], price: 500 },
        { ...mockDeals[2], price: 500 },
      ];

      const result = sortAndFilterDeals(dealsWithSamePrice, 'price-asc');

      expect(result).toHaveLength(3);
      expect(result.every(deal => deal.price === 500)).toBe(true);
    });

    it('should handle deals with same score', () => {
      const dealsWithSameScore: Deal[] = [
        { ...mockDeals[0], refurbedScore: 80 },
        { ...mockDeals[1], refurbedScore: 80 },
        { ...mockDeals[2], refurbedScore: 80 },
      ];

      const result = sortAndFilterDeals(dealsWithSameScore, 'score-desc');

      expect(result).toHaveLength(3);
      expect(result.every(deal => deal.refurbedScore === 80)).toBe(true);
    });
  });
});

