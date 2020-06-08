describe('Dish', function() {

  beforeEach(function() {
    dish = new Dish("Byrek", 4.50);
  });

  describe('Dish', function() {
    it ('can store the name of dish', function() {
      expect(dish.name).toEqual('Byrek')
    });

    it ('can store the price of dish', function() {
      expect(dish.price).toEqual(4.50)
    });
  });
});
