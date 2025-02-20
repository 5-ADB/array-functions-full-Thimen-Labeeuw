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

VerkorteAutoLijst = autos.map((value, index) => {
  return {
    merk: `${autos[index].prijs}`,
    bouwjaar: `${autos[index].bouwjaar}`,
  };
});

console.log(VerkorteAutoLijst);
