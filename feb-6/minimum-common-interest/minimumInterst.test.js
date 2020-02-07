import findRestaurant from './minimumInterest';

describe('Solve minimum common interest problem', () => {
  it('should give the right test results', () => {
    const restaurant1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
    const restaurant2 = ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun'];

    expect(findRestaurant(restaurant1, restaurant2)).toEqual(['Shogun']);

    const restaurant3 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
    const restaurant4 = ['KFC', 'Shogun', 'Burger King'];

    expect(findRestaurant(restaurant3, restaurant4)).toEqual(['Shogun']);

    const restaurant5 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
    const restaurant6 = ['KFC', 'Burger King', 'Tapioca Express', 'Shogun'];

    expect(findRestaurant(restaurant5, restaurant6).length).toEqual(4);
  });
});
