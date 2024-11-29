class ElectronicComponentSimulationLibrary {
    constructor() {}

    resistence(name, resistence_in_ohms, voltage_in_volts, tollerance) {
        // Calcola i limiti della resistenza considerando la tolleranza
        const min_resistance = resistence_in_ohms * (1 - tollerance / 100);
        const max_resistance = resistence_in_ohms * (1 + tollerance / 100);

        // Resistenza effettiva scelta in modo casuale entro i limiti
        const actual_resistance = Math.random() * (max_resistance - min_resistance) + min_resistance;

        // Calcolo della corrente usando la resistenza effettiva
        const current = voltage_in_volts / actual_resistance;

        // Caduta di tensione nel resistore
        const voltage_drop = current * actual_resistance;

        // Tensione risultante dopo la caduta
        const resulting_voltage = voltage_in_volts - voltage_drop;

        // Ritorna un oggetto con i risultati
        return {
            name: name,
            original_voltage: voltage_in_volts,
            actual_resistance: actual_resistance,
            current: current,
            voltage_drop: voltage_drop,
            resulting_voltage: resulting_voltage
        };
    }

    capacitor(name, capacitance_in_farads, initial_voltage, time_seconds) {
        // Costante di tempo RC (assumendo un resistore in serie, se necessario)
        const resistance = 1000; // Supponiamo una resistenza fissa di 1000 ohm per semplicità
        const tau = resistance * capacitance_in_farads; // Tau = R * C

        // Calcolo della tensione ai capi del condensatore in funzione del tempo (carica o scarica)
        const voltage = initial_voltage * Math.exp(-time_seconds / tau);

        // Calcolo della carica immagazzinata nel condensatore
        const charge = capacitance_in_farads * voltage;

        return {
            name: name,
            capacitance: capacitance_in_farads,
            initial_voltage: initial_voltage,
            time: time_seconds,
            voltage: voltage,
            charge: charge
        };
    }

    inductor(name, inductance_in_henrys, initial_current, time_seconds, voltage_in_volts) {
        // Calcolo della variazione di corrente nel tempo
        const current_change_rate = voltage_in_volts / inductance_in_henrys;

        // Calcolo della corrente al tempo t
        const current = initial_current + current_change_rate * time_seconds;

        // Calcolo della tensione ai capi dell'induttore
        const voltage = inductance_in_henrys * current_change_rate;

        return {
            name: name,
            inductance: inductance_in_henrys,
            initial_current: initial_current,
            time: time_seconds,
            current: current,
            voltage: voltage
        };
    }
}