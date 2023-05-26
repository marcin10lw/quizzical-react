import axios from "axios";
import { formatApiResponse } from "../utils/formatApiResponse";

export const getQuestions = async (amount, categoryId) => {
  const { data } = await axios.get(`https://opentdb.com/api.php`, {
    params: { amount, category: categoryId },
  });
  const results = await data.results;

  return formatApiResponse(results);
};
