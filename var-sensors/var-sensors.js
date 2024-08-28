/* v1.0.0 */
function createReactiveVar(initialValue) {
  let value = initialValue;
  let onChangeCallback = null;

  const reactiveVar = {
    get value() {
      return value;
    },
    set value(newValue) {
      if (value !== newValue) {
        value = newValue;
        if (onChangeCallback) {
          onChangeCallback(newValue);
        }
      }
    },
    set onChange(callback) {
      if (typeof callback === 'function') {
        onChangeCallback = callback;
      }
    },
    get onChange() {
      return !!onChangeCallback;
    }
  };

  return reactiveVar;
}