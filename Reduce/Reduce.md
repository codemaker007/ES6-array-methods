# Array.reduce()

Met de reduce() method kan je iets doen met de data uit een array. Je kan bijvoorbeeld van een array met personen alle leeftijden bij elkaar optellen zonder een for of foreach loop te gebruiken.

Je doet dit door reduce() uit te voeren op een array met een functie die twee dingen binnenkrijgt, de naam van een variabele waarin het totaal wordt opgeslagen en een item. Hoe je het totaal noemt maakt niks uit. Naast deze functie moet je nog een begin waarde voor het totaal aangeven, bij getallen kan dit 0 zijn maar het kan ook bijvoorbeeld een lege string zijn.

Voorbeeld:

Je hebt een lijst van personen en wilt de totale leeftijd krijgen.

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

const totaleLeeftijd = personen.reduce(
  (totaal, persoon) => (totaal += persoon.age),
  0
);
console.log(totaleLeeftijd);
```

Je gebruikt hier een variabele totaal waaraan je de leeftijden van alle personen toevoegt. Je geeft totaal hier de beginwaarde 0.
