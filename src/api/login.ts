import { LoginApi } from "@/generated-api";

const loginApi = new LoginApi();

const TVDB_TOKEN_KEY = "tvdb-token";

export const getToken = async () => {
	const token = localStorage.getItem(TVDB_TOKEN_KEY);

	if (token) {
		return token;
	}

	const response = await loginApi.loginPost({
		loginPostRequest: {
			apikey: import.meta.env.VITE_TVDB_API_KEY,
		},
	});

	localStorage.setItem(TVDB_TOKEN_KEY, response.data?.token ?? "");

	return response.data?.token;
};
