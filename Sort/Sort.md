# Array.sort()

De sort() method gebruik je om arrays te sorteren.
Je gebruikt de sort() method door hem op een array uit te voeren en op basis van een voorwaarde of meerdere voorwaarden 1 of -1 te returnen.

1 zorgt er als het ware voor dat een item omhoog klimt in de array en -1 zorgt er juist voor dat het item omlaag klimt.

__sort() heeft een belangrijke eigenaardigheid die niet erg logisch is. Hij veranderd de array.__
__Je zal de array dus moeten kopiëren als je de originele volgorde wilt behouden__

Voorbeeld:
Je hebt weer een array met mensen erin en wilt ze sorteren op basis van leeftijd. Je kan dit doen door de sort() method te gebruiken en 1 te returnen als de leeftijd van persoon 1 groter is dan die van persoon 2.

Uitwerking:

```javascript
const personen = [
  { first_name: "Lilly", last_name: "Buxsy", age: 63 },
  { first_name: "Livy", last_name: "Boobyer", age: 65 },
  { first_name: "Gwendolyn", last_name: "Betjes", age: 60 },
  { first_name: "Dame", last_name: "Condy", age: 56 },
  { first_name: "Maurizia", last_name: "Lindores", age: 96 },
  { first_name: "Gwenneth", last_name: "Chartre", age: 88 },
  { first_name: "Gerry", last_name: "Junkinson", age: 42 },
  { first_name: "Janetta", last_name: "Hallex", age: 99 },
  { first_name: "Nanice", last_name: "Girdler", age: 55 },
  { first_name: "Aubrie", last_name: "Crummey", age: 56 }
];

const personenKopie = personen.slice();
const personenGesorteerd = personenKopie.sort((a, b) => a.age > b.age ? 1 : -1);
console.table(personenGesorteerd)
```

Je gebruikt hier een arrow function die twee items binnenkrijgt: a en b. Als de leeftijd van persoon 1, a dus groter is dan die van persoon 2, b klimt a 1 stap omhoog in de array, anders klimt a 1 stap omlaag in de array.

Omgekeerd kan dit natuurlijk ook door 1 en -1 om te wisselen. Dan krijg je:

```javascript
const personen = [
  { first_name: "Lilly", last_name: "Buxsy", age: 63 },
  { first_name: "Livy", last_name: "Boobyer", age: 65 },
  { first_name: "Gwendolyn", last_name: "Betjes", age: 60 },
  { first_name: "Dame", last_name: "Condy", age: 56 },
  { first_name: "Maurizia", last_name: "Lindores", age: 96 },
  { first_name: "Gwenneth", last_name: "Chartre", age: 88 },
  { first_name: "Gerry", last_name: "Junkinson", age: 42 },
  { first_name: "Janetta", last_name: "Hallex", age: 99 },
  { first_name: "Nanice", last_name: "Girdler", age: 55 },
  { first_name: "Aubrie", last_name: "Crummey", age: 56 }
];

const personenKopie = personen.slice();
const personenGesorteerdOmgekeerd = personenKopie.sort((a, b) => a.age > b.age ? -1: 1);
console.table(personenGesorteerdOmgekeerd);
```

Nu krijg je de personen gesorteerd op aflopende leeftijd.