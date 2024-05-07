let JUEGO;
let vecesJugar = parseInt(prompt("Ingresar veces a jugar:"));

for (i = 1; i <= vecesJugar; i++) {
  do {
    JUEGO = prompt(
      "Elige tu jugada, Piedra Papel o Tijera"
    ).toLowerCase();
  } while (
    JUEGO !== "piedra" &&
    JUEGO !== "papel" &&
    JUEGO !== "tijera"
  );

  let pc = Math.floor(Math.random() * 3);

  if (pc == 0) {
    pc = "piedra";
  } else if (pc == 1) {
    pc = "papel";
  } else {
    pc = "tijera";
  }

  if (JUEGO === pc) {
    alert("Has empatado con la máquina.");
    console.log(
      `En la ronda N°${i} elegiste ${JUEGO} y la máquina eligió ${pc}`
    );
  } else if (
    (JUEGO === "piedra" && pc === "tijera") ||
    (JUEGO === "papel" && pc === "piedra") ||
    (JUEGO === "tijera" && pc === "papel")
  ) {
    alert("Le has ganado a la máquina.");
    console.log(
      `En la ronda N°${i} elegiste ${JUEGO} y la máquina eligió ${pc}`
    );
  } else {
    alert("Has perdido contra la máquina.");
    console.log(
      `En la ronda N°${i} elegiste ${JUEGO} y la máquina eligió ${pc}`
    );
  }
}
