// types/OrderTypes.ts
export interface Ingredient {
  IngredientID: number;
  IngredientDescrption: string;
}

export interface Item {
  ItemID: number;
  ItemDescription: string;
  Ingredients: Ingredient[];
}

export interface Order {
  OrderID: number;
  Items: Item[];
}
