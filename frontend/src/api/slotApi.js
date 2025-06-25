import axios from "axios";

const BASE_URL = "http://127.0.0.1:8080/api/v1/slot-management";

export const fetchSlotsByDate = async (doctorId, date) => {
  const requestData = {
    doctorId,
    startDate: date,
    endDate: date,
    action: "GET_SLOTS"
  };

  const response = await axios.post(BASE_URL, requestData);
  return response.data;
};

export const bookSlot = async (slotId, doctorId) => {
  const requestData = {
    doctorId,
    slotId,
    action: "BOOK_SLOT"
  };

  const response = await axios.post(BASE_URL, requestData);
  return response.data;
};
