function ColorsMixer(hex_color1, hex_color2, tending) {
  // Se 'tending' è null, undefined o non è un numero con percentuale, impostalo al 50%
  if (tending == null || tending == undefined || !/^(\d{1,2}|100)%$/.test(tending)) {
    tending = "50%";
  }
  
  // Rimuovi il simbolo % e converti in un numero decimale
  tending = parseInt(tending.replace("%", "")) / 100;

  // Funzione per convertire un colore esadecimale in RGB
  function hexToRgb(hex) {
    let bigint = parseInt(hex.substring(1), 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return { r: r, g: g, b: b };
  }

  // Funzione per convertire un colore RGB in esadecimale
  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
  }

  // Converti i colori esadecimali in RGB
  let color1_rgb = hexToRgb(hex_color1);
  let color2_rgb = hexToRgb(hex_color2);

  // Calcola il colore misto basato sulla tendenza
  let mixed_r = Math.round(color1_rgb.r * (1 - tending) + color2_rgb.r * tending);
  let mixed_g = Math.round(color1_rgb.g * (1 - tending) + color2_rgb.g * tending);
  let mixed_b = Math.round(color1_rgb.b * (1 - tending) + color2_rgb.b * tending);

  // Converti il colore misto in esadecimale e restituiscilo
  return rgbToHex(mixed_r, mixed_g, mixed_b);
}