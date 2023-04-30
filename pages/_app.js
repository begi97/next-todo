import '@/styles/globals.css'
import {useEffect} from "react";
import uuid from "react-uuid";
import Layout from "../components/Layout";
import {API_URL} from "../utils/";




export default function App({ Component, pageProps, categories }) {

  useEffect(() => {
    
    fetch("/api/set-cookie", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token: uuid()})
    })

  }, [])

  

  

  return <>
      <Layout categories= {categories}>
        <Component {...pageProps} />
      </Layout>
  </> 
}


App.getInitialProps = async () => {
 
  // const token = req.cookies.token;

  // request body
  const requestBody = {
    api_key: process.env.api_key || "3f8101e915918b586ca043131256b684",
    type: 1
  }

  

  const response = await fetch(`${API_URL}/en-get-filters.json`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestBody)
  })

  const data = await response.json();

  // console.log(data);

  const data_categories = data.result || [];

  // console.log(data_categories);
  

  return { categories: data_categories }

}
