const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

// loop starts here

for (person of people) {
  if (person == `Phil` || person == `Lola`) {
    refused.append(`${person} `);
  } else {
    admitted.append(`${person} `);
  }
}

// refused.textContent += ;
// admitted.textContent += ;
