export type MenuItemKeys =
| "PopItems"
| "Sweets"
| "Tawa"
| "Tandoor"
| "Snacks"
| "Soups"
| "Cold-Drinks"
| "Hot-Drinks"
| "Rice"
| "Salad"
| "Chinese"
| "South-Indian"
| "Thalis"
| "Paneer-Items"
| "Vegetables";

export type MenuItemType = {
    imgsrc: string;
    altTxt: string;
    name: string;
    description: string;
    quantity: string;
    price: string;
}