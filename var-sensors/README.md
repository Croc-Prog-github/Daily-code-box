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

### C++
```cpp
#include <iostream>
#include <functional>

class ReactiveVar {
  private:
  int value;
  std::function<void(int)> onChangeCallback;

  public:
  // Costruttore per inizializzare la variabile con un valore
  ReactiveVar(int initialValue) : value(initialValue), onChangeCallback(nullptr) {}

  // Getter per il valore
  int getValue() const {
    return value;
  }

  // Setter per il valore, con chiamata al callback se il valore cambia
  void setValue(int newValue) {
    if (value != newValue) {
      value = newValue;
      if (onChangeCallback) {
        onChangeCallback(newValue);
      }
    }
  }

  // Setter per il callback onChange
  void setOnChange(std::function<void(int)> callback) {
    onChangeCallback = callback;
  }

  // Verifica se il callback onChange è impostato
  bool isOnChangeSet() const {
    return onChangeCallback != nullptr;
  }
};
```