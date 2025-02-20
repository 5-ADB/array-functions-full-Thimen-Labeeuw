autos = [
  {
    merk: "lamborghini",
    kleur: "blauw",
    bouwjaar: "2001",
    prijs: 300000,
  },
  {
    merk: "ferari",
    kleur: "donkerrood",
    bouwjaar: "2020",
    prijs: 600000,
  },
  {
    merk: "fiat",
    kleur: "biege/bordeau",
    bouwjaar: "1987",
    prijs: 25000,
  },
];

function totaalPrijs(lijst) {
  let totaal = 0;
  autos.forEach((value, index) => (totaal += autos[index].prijs));
  return totaal;
}

console.log(totaalPrijs(autos));
