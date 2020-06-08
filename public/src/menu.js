class Menu {
    constructor() {
      this.dishes = []
    };
  
    AddNewDish(dish) {
      this.dishes.push(dish)
    };

    MenuList(){
      this.dishes
    }
};