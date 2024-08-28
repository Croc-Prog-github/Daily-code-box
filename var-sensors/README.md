# Var-sensors
Rileva un cambiamento di valori prima/dopo in una variabile.

**Esempio:**
```js
  let myVar = createReactiveVar(10);

  // Definisco il comportamento da eseguire al cambio di valore
  myVar.onChange = function(newValue) {
    console.log("Valore cambiato a:", newValue);
  };

  // Cambio il valore della variabile
  myVar.value = 20;  // Output: Valore cambiato a: 20
  console.log(myVar.onChange);  // Output: true

  // Cambio il valore della variabile
  myVar.value = 20;  // Nessun output perché il valore non è cambiato
  myVar.onChange = null; // Rimuovi il callback onChange
  console.log(myVar.onChange);  // Output: false
```