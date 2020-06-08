describe('Menu', function() {

    beforeEach(function() {
      menu = new Menu();
    })
 
    describe('Menu', function(){
      it ('can return a list of dishes', function () {
        var item1 = {
          name : "Byrek",
          price : 4.50
        };
 
        var item2 = {
          name : "Pizza",
          price : 5
        };
 
        menu.AddNewDish(item1)
        menu.AddNewDish(item2)
        expect(menu.dishes.length).toEqual(2)
        expect(menu.dishes[0].name).toEqual('Byrek')
        expect(menu.dishes[0].price).toEqual(4.50)
        expect(menu.dishes).toContain(item2)
      });
    });
 
    describe('add_item', function(){
      it ('can add a dish to the menu', function () {
        var dish = {
          name : "Byrek",
          price : 4.50
        };
 
        menu.AddNewDish(dish)
        expect(menu.dishes).toContain(dish)
      });
    });
  }); 