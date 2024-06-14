import axios from "axios";

const JSON_SERVER_HOST = "http://localhost:4000";

export const getExpenses = async () => {
  try {
    const response = await axios.get(`${JSON_SERVER_HOST}/expenses`);
    return response.data;
  } catch (err) {
    console.log(err);
    alert("에러가 발생했어요!");
  }
};

export const getExpense = async ({ queryKey }) => {
  try {
    const response = await axios.get(
      `${JSON_SERVER_HOST}/expenses/${queryKey[1]}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
    alert("에러가 발생했어요!");
  }
};

export const postExpense = async (newExpense) => {
  try {
    const { data } = await axios.post(
      `${JSON_SERVER_HOST}/expenses`,
      newExpense
    );
    return data;
  } catch (err) {
    console.log(err);
    alert("에러가 발생했어요! 데이터가 저장되지 않아요!");
  }
};

export const putExpense = async (updatedExpense) => {
  const { id, ...rest } = updatedExpense;
  try {
    const { data } = await axios.put(
      `${JSON_SERVER_HOST}/expenses/${id}`,
      rest
    );
    return data;
  } catch (err) {
    console.log(err);
    alert("에러가 발생했어요! 데이터가 수정되지 않아요!");
  }
};

export const deleteExpense = async (id) => {
  try {
    const { data } = await axios.delete(`${JSON_SERVER_HOST}/expenses/${id}`);
    return data;
  } catch (err) {
    console.log(err);
    alert("에러가 발생했어요! 데이터가 삭제되지 않아요!");
  }
};
