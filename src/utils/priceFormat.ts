export function priceFormat(price: number) {
  if (price.toString().length > 3) {
    let priceFormatted = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return priceFormatted;
  }
  return price;
}
