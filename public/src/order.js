class Order {
    constructor() {
      this.orderItems = []
      this.priceTotal = 0
      this.outForDelivery = false
      this.orderSubmitted = false
      this.orderCount = {};
    }
  
    AddToOrder(item) {
      this.orderItems.push(item)
    };
  
    TotalPrice() {
      this.orderItems.forEach (item => this.priceTotal += item.price);
    };
  
    SubmitOrder() {
      this._countItems()
      this.orderSubmitted = true
    };
  
    DeliveryDone() {
      this.outForDelivery = true
    }

    private 

    _countItems(item){
      this.orderItems.forEach(item =>{
        if(item.name in this.orderCount){
          this.orderCount[item.name]  += 1;
        } else {
          this.orderCount[item.name] = 1
        } 
      })
    }
  };