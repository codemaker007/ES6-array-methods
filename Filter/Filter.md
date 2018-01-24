# array.filter()

Met filter kan je dingen uit een array halen op basis van kenmerken.
Dit gebeurt door de filter() functie uit te voeren op de desbetreffende array en deze data in bijvoobeeld een const te zetten. Je verkrijgt de data door true te returnen voor alles wat aan de voorwaarde(n) voldoet.

Een voorbeeld:
Je hebt een array met verschillende mensen hun namen en leeftijden in objects. Je wilt iedereen verkrijgen die 65 jaar of ouder zijn en deze in een const genaamd metPensioen zetten.

Je kan dit doen door gebruik te maken van de array.filter() method.

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

const metPensioen = personen.filter(persoon => persoon.age >= 65);
```

Hier gebruik je de ES6 arrow function notatie zodat je geen return statement hoeft te gebruiken. je returnt hier een conditie, als deze true is wordt de persoon toegevoegd aan de metPensioen const.
