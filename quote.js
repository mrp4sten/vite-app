import axios from "axios";

export function getQuote (element) {
  const options = {
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes',
    params: {
      categories: 'fitness',
    },
    headers: {
      'X-Api-Key': 'KPNTcDHzK+HYhSeixDLp/g==5RHnsG5uLNXVZr5E',
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