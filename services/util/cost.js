export function calculateCost(storage) {
    const rate = storage <= 10 ? 4 : storage <= 100 ? 4 : 1;
    return rate * storage * 100;
}