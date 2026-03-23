interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
}

export const buildWhatsAppMessage = (items: CartItem[], total: number): string => {
  const header = "Hi! I'd like to order from *VILLAGE KITCHEN* (Dargai Branch):\n\n";
  
  const itemLines = items
    .map((item) => `- ${item.qty}x ${item.name} — PKR ${(item.price * item.qty).toLocaleString()}`)
    .join('\n');
  
  const footer = `\n\n*Total: PKR ${total.toLocaleString()}*\n\nPlease confirm. Thank you!`;
  
  const message = header + itemLines + footer;
  
  return `https://wa.me/923471900500?text=${encodeURIComponent(message)}`;
};