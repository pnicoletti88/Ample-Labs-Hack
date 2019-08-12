import axios from "axios";

const getLocationData = async (action, startDate, endDate) => {
  const result = await axios.get("/api/locationData", {
    params: {
      action,
      startDate: startDate.toDate(),
      endDate: endDate.toDate()
    }
  });
  if (result.statusText === "OK") {
    return result.data;
  }
  throw new Error("Server error: location data fetch");
};

export { getLocationData };
