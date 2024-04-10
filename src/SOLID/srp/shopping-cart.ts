type CardItem = {name:string,price:number};
export class ShoppingCard{
    private readonly _items:CardItem[]=[];
    addItem(item:CardItem):void{
        this._items.push(item);
    }
    removeItem()
}