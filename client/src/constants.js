// no billing attached to key - for dev purposes only
const googleMaps = { key: "AIzaSyAEWRdFiazkHE7FPHTNKXhXb1POsr9hZ7Y" };

const pastDate = new Date();
pastDate.setDate(pastDate.getDate() - 30);

const initialDateRange = { startDate: pastDate, endDate: Date.now };

export { googleMaps, initialDateRange };
