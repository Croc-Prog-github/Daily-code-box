# Var-sensors
Rileva un cambiamento di valori prima/dopo in una variabile.

## Esempi:
### JS
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

### C
```c
void onChangeCallback(int newValue) {
  printf("Valore cambiato a: %d\n", newValue);
}

int main() {
  // Creazione di una ReactiveVar
  ReactiveVar* myVar = createReactiveVar(10);

  // Imposta il callback onChange
  setOnChange(myVar, onChangeCallback);

  // Modifica il valore
  setValue(myVar, 20);  // Output: Valore cambiato a: 20

  // Verifica se onChange è impostato
  printf("onChange è impostato: %d\n", isOnChangeSet(myVar));  // Output: 1

  // Modifica il valore a un valore uguale, non si dovrebbe attivare il callback
  setValue(myVar, 20);  // Nessun output

  // Libera la memoria allocata
  free(myVar);

  return 0;
}
```