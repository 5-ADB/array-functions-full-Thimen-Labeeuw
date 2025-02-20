autos = [
  {
    merk: "lamborghini",
    kleur: "blauw",
    bouwjaar: "2001",
    prijs: "300000euro",
  },
  {
    merk: "ferari",
    kleur: "donkerrood",
    bouwjaar: "2020",
    prijs: "600000euro",
  },
  {
    merk: "fiat",
    kleur: "biege/bordeau",
    bouwjaar: "1987",
    prijs: "25000",
  },
];

let gesorteerdeAutos = autos.map((value, index) => {
  return `${autos[index].merk}`;
});

gesorteerdeAutosNew = gesorteerdeAutos.sort();

let FinalGesorteedeAutos = [];
for (let index = 0; index < gesorteerdeAutos.length; index++) {
  if (gesorteerdeAutos[index].merk == gesorteerdeAutosNew[index]) {
    FinalGesorteedeAutos.splice(inde);
  }
}

console.log(gesorteerdeAutosNew);
