enum IconSize {
  SMALL = 8,
  MEDIUM = 12,
  LARGE = 24,
  XL = 48
}

const icono = {
  nombre: "wave",
  tamanio: IconSize.XL
};

function showIcon(nombre: string, tamanio: IconSize): void {
  console.log(`El nombre del icono es ${nombre} y su tamaño es de ${tamanio} puntos`);
}

showIcon(icono.nombre, icono.tamanio);
showIcon("muscle", IconSize.SMALL);