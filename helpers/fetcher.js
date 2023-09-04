import { Cookies } from "react-cookie";
import Router from "next/router";

const fetcher = async params => {
  const { url, method, body, type } = params;

  try {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*"
    };

    const newParams = {
      method,
      headers,
      body: JSON.stringify(body),
    }

    const response = await fetch(url, newParams)
      .then(response => {
        if (response.status === 401) {
          Router.push("/login");
        }

        if (type === 'json') return response.json();
        if (type === 'text') return response.text();

        return response;
      })
      .catch(error => {
        console.log({ error });
      });

    return response;
  } catch (error) {
    console.error("Fetcher : " + { error });
    return {};
  }
};

export default fetcher;
