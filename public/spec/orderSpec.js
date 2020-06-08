describe('Order', function() {

    beforeEach(function() {
      order = new Order();      
      dish1 = new Dish("Byrek", 4.50);
      dish2 = new Dish("Pasta", 5.50);
    })
 
    describe('Add To Order', function(){
      it ('can add a dish to the an order', function () {
  

        order.AddToOrder(dish1)
        order.AddToOrder(dish2)
        expect(order.orderItems).toContain(dish1)
        expect(order.orderItems).toContain(dish2)
      });
    });
    describe('Total Price', function(){
      it ('can fetch the total order price', function () {
        order.AddToOrder(dish1);
        order.AddToOrder(dish2);
        order.TotalPrice();
        expect(order.priceTotal).toEqual(10);
      });
    });
 
    describe('Submit Order', function(){
      it ('can change the orderStatus to complete', function () {
        order.SubmitOrder();
        expect(order.orderSubmitted).toEqual(true);
      });
 
      it('returns the order item quantities', function(){

        order.AddToOrder(dish1);
        order.AddToOrder(dish2);
        order.SubmitOrder();
        console.log(order.orderCount)
        expect(order.orderCount).toEqual({"Byrek": 1, "Pasta": 1})
      });
    });
 
    describe('completeOrder', function(){
      it ('can change the orderStatus to complete', function () {
        order.DeliveryDone();
        expect(order.outForDelivery).toEqual(true);
      });
    });
  }); 