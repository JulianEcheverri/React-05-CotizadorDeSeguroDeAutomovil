// Obtiene diferencia de anios
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

// Calcula todal a pagar segun la marca
export const calcularMarca = (marca) => {
  let incremento = 0;
  switch (marca) {
    case "americano":
      incremento = 1.15;
      break;
    case "europeo":
      incremento = 1.3;
      break;
    case "asiatico":
      incremento = 1.05;
      break;
    default:
      break;
  }
  return incremento;
};

// Calcula el tipo de seguro
export const obtenerPlan = (plan) => {
  return plan === "basico" ? 1.2 : 1.5;
};

// Upercase a la primera letra mayuscula
export const primerMayuscula = (texto) => {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  };
