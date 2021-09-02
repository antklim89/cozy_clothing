export function getPrice(price: number, discount: number): number {
    return (price - ((price / 100) * discount));
}
