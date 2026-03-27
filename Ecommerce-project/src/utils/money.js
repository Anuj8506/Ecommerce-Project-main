export function Formatmoney(amountCents){
    return `$${(amountCents.priceCents / 100).toFixed(2)}`;
}