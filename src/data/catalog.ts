export interface CatalogItem {
  id: string
  name: string
  description: string
  imageLabel: string
  imageUrl: string
  priceLabel: string
  details: string[]
}

export const workshops: CatalogItem[] = [
  {
    id: 'cupcake-workshop',
    name: 'Cupcakes versieren',
    description: 'Leer cupcakes vullen, opspuiten en versieren met kleurrijke toppings.',
    imageLabel: 'Cupcakeworkshop',
    imageUrl: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1200&q=85',
    priceLabel: 'Voorbeeldprijs: €35 p.p.',
    details: ['Duur: ongeveer 2,5 uur', 'Voor beginners', 'Ingrediënten en materialen inbegrepen'],
  },
  {
    id: 'cake-decorating-workshop',
    name: 'Taart decoreren',
    description: 'Oefen met botercreme en maak je eigen feestelijke taartdecoratie.',
    imageLabel: 'Taartdecoratie workshop',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85',
    priceLabel: 'Voorbeeldprijs: €45 p.p.',
    details: ['Duur: ongeveer 3 uur', 'Kleine groepen', 'Neem je eigen taart mee naar huis'],
  },
  {
    id: 'cookies-workshop',
    name: 'Koekjes bakken',
    description: 'Bak en versier koekjes om mee naar huis te nemen of cadeau te geven.',
    imageLabel: 'Koekjes workshop',
    imageUrl: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=85',
    priceLabel: 'Voorbeeldprijs: €30 p.p.',
    details: ['Duur: ongeveer 2 uur', 'Geschikt voor jong en oud', 'Inclusief koekjes en versieringen'],
  },
]

export const cakes: CatalogItem[] = [
  {
    id: 'vanilla-celebration-cake',
    name: 'Vanille feesttaart',
    description: 'Luchtige vanillecake met zachte creme en seizoensdecoratie.',
    imageLabel: 'Vanille feesttaart',
    imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=85',
    priceLabel: 'Voorbeeldprijs: vanaf €28',
    details: ['Geschikt voor ongeveer 8 personen', 'Decoratie aan te passen', 'Allergenen graag vooraf bespreken'],
  },
  {
    id: 'chocolate-layer-cake',
    name: 'Chocolade laagjestaart',
    description: 'Rijke chocoladelagen afgewerkt met romige chocoladecreme.',
    imageLabel: 'Chocolade laagjestaart',
    imageUrl: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=1200&q=85',
    priceLabel: 'Voorbeeldprijs: vanaf €32',
    details: ['Geschikt voor ongeveer 8 personen', 'Gemaakt met chocoladecake en creme', 'Allergenen graag vooraf bespreken'],
  },
  {
    id: 'strawberry-cake',
    name: 'Aardbeientaart',
    description: 'Frisse taart met aardbeien, zachte room en een lichte biscuitbodem.',
    imageLabel: 'Aardbeientaart',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85',
    priceLabel: 'Voorbeeldprijs: vanaf €30',
    details: ['Geschikt voor ongeveer 8 personen', 'Met verse aardbeien wanneer beschikbaar', 'Allergenen graag vooraf bespreken'],
  },
]