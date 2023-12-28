import axios from "axios";

export function getQuote (element) {
  const apiUrl = process.env.API_NINJA_URL;
  const apiKey = process.env.API_NINJA_KEY;
  const options = {
    method: 'GET',
    url: `${apiUrl}/quotes`,
    params: {
      categories: 'fitness',
    },
    headers: {
      'X-Api-Key': apiKey,
    }
  };

  try {
    const request = async () => await axios.request(options).then((response) => {
      element.innerHTML = response.data[0].quote
    });

    element.addEventListener('click', () => {
      request();
    });

    request();
  } catch (error) {
    console.error(error);
  }

}