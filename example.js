const ECSL = new ElectronicComponentSimulationLibrary();

const resistanceResult = ECSL.resistence("Resistor1", 1000, 5, 5);
const capacitorResult = ECSL.capacitor("Capacitor1", 0.000001, 5, 1); // 1 microfarad, 5V, 1 secondo
const inductorResult = ECSL.inductor("Inductor1", 0.01, 0, 1, 5); // 10mH, 0A iniziale, 1 secondo, 5V


console.log(resistanceResult, capacitorResult);