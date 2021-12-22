let idade = 22;
let temCNH = false;

if (idade >= 18 && temCNH) {
  console.log("Pode dirigir");
} else if (idade >= 18 && !temCNH) {
  console.log("Falta tirar a CNH ein");
} else {
  console.log("Você não tem CNH e nem 18 anos ainda");
}
