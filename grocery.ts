class Grocery {
    name: string;
    quantity: number;
    pricePerItem: number;
    totalPrice: number;

    constructor(name: string, quantity: number, price: number){
        this.name = name;
        this.quantity = quantity;
        this.pricePerItem = price;
        this.totalPrice = Math.round(quantity * price * 100) / 100;
    }
}

let groceries : Array<Grocery> = [
    new Grocery("Milk", 2, 2.99),
    new Grocery("Eggs", 12, 1),
    new Grocery("Ground Beef", 5, 3.99),
    new Grocery("Bacon", 1, 5.99),
    new Grocery("American Cheese", 2, 1.50),
    new Grocery("Ketchup", 1, 2.22)
]

function createList() : void{
    let list = document.getElementById("groceryList");
    groceries.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item.name + " $" + item.pricePerItem + " X " + item.quantity + " = $" + item.totalPrice;
        list!.appendChild(li);
    });
}


