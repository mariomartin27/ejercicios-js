const users = [
  { name: "Abel", years: 43 },
  { name: "Maria", years: 18 },
  { name: "Pedro", years: 14 },
  { name: "Samantha", years: 32 },
  { name: "Raquel", years: 16 },
];

for (let i = 0; i < users.length; i++) {
  const usuario = users[i];
  if (usuario.years >= 18) {
    console.log("Usario mayor de edad", usuario.name);
  } else {
    console.log("Usuario menor de edad", usuario.name);
  }
}
