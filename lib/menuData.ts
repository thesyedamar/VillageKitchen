export interface MenuItem {
  id: number;
  name: string;
  price: number;
  badge: string;
  desc: string;
  img: string;
  category: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    name: "Burgers",
    items: [
      { id: 1, name: "Smash Burger", price: 550, badge: "Bestseller", desc: "Crispy smashed patty, special sauce, pickles, onions", img: "photo-1568901346375-23c9450c58cd", category: "Burgers" },
      { id: 2, name: "Cheese Burger", price: 480, badge: "", desc: "Double cheddar, caramelized onions, mustard mayo", img: "photo-1550547660-d9450f859349", category: "Burgers" },
      { id: 3, name: "Double Stack", price: 750, badge: "Popular", desc: "Two patties, pepper jack cheese, jalapenos, sauce", img: "photo-1594212699903-ec8a3eca50f5", category: "Burgers" },
      { id: 4, name: "BBQ Crunch", price: 620, badge: "", desc: "Smoky BBQ sauce, crispy onion rings, cheddar", img: "photo-1561758033-d89a9ad46330", category: "Burgers" },
    ],
  },
  {
    name: "Rolls",
    items: [
      { id: 5, name: "Chicken Roll", price: 320, badge: "", desc: "Grilled chicken, garlic sauce, fresh vegetables", img: "photo-1626700051175-6818013e1d4f", category: "Rolls" },
      { id: 6, name: "Beef Seekh Roll", price: 380, badge: "Spicy", desc: "Juicy seekh kebab, green chutney, crispy onions", img: "photo-1565299507177-b0ac66763828", category: "Rolls" },
      { id: 7, name: "Zinger Roll", price: 350, badge: "", desc: "Crispy zinger fillet, coleslaw, sriracha mayo", img: "photo-1599487488170-d11ec9c172f0", category: "Rolls" },
      { id: 8, name: "Veggie Roll", price: 280, badge: "", desc: "Mixed vegetables, hummus, fresh herbs, pita", img: "photo-1553979459-d2229ba7433b", category: "Rolls" },
    ],
  },
  {
    name: "Pizza",
    items: [
      { id: 9, name: "Margherita", price: 850, badge: "Classic", desc: "San Marzano tomato, fresh mozzarella, basil", img: "photo-1574071318508-1cdbab80d002", category: "Pizza" },
      { id: 10, name: "Pepperoni", price: 950, badge: "Popular", desc: "Loaded pepperoni, extra mozzarella, oregano", img: "photo-1628840042765-356cda07504e", category: "Pizza" },
      { id: 11, name: "BBQ Chicken", price: 1100, badge: "", desc: "Smoky BBQ base, grilled chicken strips, red onion", img: "photo-1565299624946-b28f40a0ae38", category: "Pizza" },
      { id: 12, name: "Veggie Supreme", price: 900, badge: "", desc: "Bell peppers, mushrooms, olives, jalapenos", img: "photo-1513104890138-7c749659a591", category: "Pizza" },
    ],
  },
  {
    name: "Sandwiches",
    items: [
      { id: 13, name: "Club Sandwich", price: 450, badge: "", desc: "Triple decker, chicken, egg, lettuce, tomato", img: "photo-1553909489-cd47e0907980", category: "Sandwiches" },
      { id: 14, name: "Grilled Chicken", price: 420, badge: "", desc: "Herb-marinated chicken breast, avocado, tomato", img: "photo-1528735602780-2552fd46c7af", category: "Sandwiches" },
      { id: 15, name: "Crispy Beef", price: 480, badge: "", desc: "Crispy beef strips, horseradish mayo, rocket", img: "photo-1509722747041-616f39b57569", category: "Sandwiches" },
      { id: 16, name: "Veggie Deluxe", price: 380, badge: "", desc: "Falafel, tzatziki, cucumber, roasted peppers", img: "photo-1539252554453-80ab65ce3586", category: "Sandwiches" },
    ],
  },
  {
    name: "Drinks",
    items: [
      { id: 17, name: "Coca Cola", price: 120, badge: "", desc: "Ice cold, 500ml bottle", img: "photo-1554866585-cd94860890b7", category: "Drinks" },
      { id: 18, name: "Mango Shake", price: 220, badge: "Seasonal", desc: "Fresh mango, full cream milk, crushed ice", img: "photo-1546173159-315724a31696", category: "Drinks" },
      { id: 19, name: "Fresh Lime Soda", price: 150, badge: "", desc: "Freshly squeezed lime, mint, club soda, sugar", img: "photo-1621263764928-df1444c5e859", category: "Drinks" },
      { id: 20, name: "Strawberry Shake", price: 240, badge: "", desc: "Real strawberries, vanilla ice cream, cream", img: "photo-1572490122747-3968b75cc699", category: "Drinks" },
    ],
  },
  {
    name: "Desserts",
    items: [
      { id: 21, name: "Choco Brownie", price: 280, badge: "Chef's Pick", desc: "Warm fudge brownie with vanilla ice cream", img: "photo-1606313564200-e75d5e30476c", category: "Desserts" },
      { id: 22, name: "Cheesecake Slice", price: 320, badge: "", desc: "NY-style, strawberry compote, graham crust", img: "photo-1567171466295-4afa63d45416", category: "Desserts" },
      { id: 23, name: "Ice Cream", price: 180, badge: "", desc: "Two scoops, choice of flavor, waffle cone", img: "photo-1563805042-7684c019e1cb", category: "Desserts" },
      { id: 24, name: "Molten Lava", price: 340, badge: "", desc: "Warm chocolate lava cake, dusted cocoa powder", img: "photo-1488477181946-6428a0291777", category: "Desserts" },
    ],
  },
];

export const featuredItems = [
  { id: 1, name: "Smash Burger", price: 550, badge: "Bestseller", desc: "Crispy smashed patty, special sauce", img: "photo-1568901346375-23c9450c58cd" },
  { id: 6, name: "Beef Seekh Roll", price: 380, badge: "Street Fav", desc: "Juicy seekh kebab, green chutney", img: "photo-1565299507177-b0ac66763828" },
  { id: 10, name: "Pepperoni Pizza", price: 950, badge: "Popular", desc: "Loaded pepperoni, extra mozzarella", img: "photo-1628840042765-356cda07504e" },
  { id: 18, name: "Mango Shake", price: 220, badge: "Refreshing", desc: "Fresh mango, full cream milk", img: "photo-1546173159-315724a31696" },
];

export const getImageUrl = (imgId: string) => {
  return `https://images.unsplash.com/${imgId}?w=400&auto=format&fit=crop&q=80`;
};