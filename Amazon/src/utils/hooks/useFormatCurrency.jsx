export function FormatCurrency(priceCents){
    return (Math.round(priceCents)/100).toFixed(2);//We add Math.round  because the tofixed method has some issues when it comes to rounding off decimals
};