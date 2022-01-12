const ISS_BASE_URL = 'https://economia.awesomeapi.com.br/json/all';

const getCurrency = async () => {
  const response = await fetch(ISS_BASE_URL);
  const currencyResponseJson = await response.json();
  return response.ok
    ? Promise.resolve(currencyResponseJson)
    : Promise.reject(currencyResponseJson);
};

export default getCurrency;
