#include <stdio.h>
#include <stdlib.h>

// Dichiarazione della struttura ReactiveVar
typedef struct {
  int value;
  void (*onChangeCallback)(int);
} ReactiveVar;

// Funzione per creare una ReactiveVar
ReactiveVar* createReactiveVar(int initialValue) {
  ReactiveVar* var = (ReactiveVar*)malloc(sizeof(ReactiveVar));
  var->value = initialValue;
  var->onChangeCallback = NULL;
  return var;
}

// Funzione per impostare il valore e attivare onChange se il valore cambia
void setValue(ReactiveVar* var, int newValue) {
  if (var->value != newValue) {
    var->value = newValue;
    if (var->onChangeCallback) {
      var->onChangeCallback(newValue);
    }
  }
}

// Funzione per impostare il callback onChange
void setOnChange(ReactiveVar* var, void (*callback)(int)) {
  var->onChangeCallback = callback;
}

// Funzione per verificare se onChange è impostato
int isOnChangeSet(ReactiveVar* var) {
  return var->onChangeCallback != NULL;
}