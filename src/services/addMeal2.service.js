import axios from "axios";

const baseUrl = "http://localhost:8000/addMeal2/";

const putTokenInHeaders = () => {
	const token = localStorage.getItem("authToken");
	return {
		headers: {
			authorization: `Bearer ${token}`,
		},
	};
};

export const postAndFetchSimilarMeals = async (totalCarbs) => {
	try {
		const headers = putTokenInHeaders();
		const response = await axios.post(
			baseUrl + "getSimilarMeals",
			{
				newMealTotalCarbs: totalCarbs,
			},
			headers
		);
		return response.data.meals;
	} catch (error) {
		if (error.response) {
			console.log("Error response status:", error.response.status);
			console.log("Error response data:", error.response.data);
			return error.response; // Return error response so it can be checked in handleSubmit (as the response of the request)
		}
		console.log("Unexpected error:", error.message);
		throw error; // Rethrow if it's a non-HTTP error
	}
};
