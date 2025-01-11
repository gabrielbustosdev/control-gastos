export function formatCurrency(amaount: number){
    return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(amaount)
}