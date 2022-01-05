/** @format */
// @ts-ignore
import { API_URL } from '@env';

export async function getCards() {
	const url = `${API_URL}/cards/`;
	const requestOptions = {
		method: 'GET',
	};
	return fetch(url, requestOptions)
		.then((response) => response.text())
		.catch((error) => console.log(error));
}
