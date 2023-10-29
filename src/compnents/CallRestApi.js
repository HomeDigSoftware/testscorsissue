import React from 'react';
import axios from 'axios';
import { useState ,useEffect } from 'react';
import ReactDOM from 'react-dom';
//import fetch from "react-fetch";

const restEndpoint = "https://randomuser.me/api/";
const path = "http://localhost:5000/getData";

const callRestApi = async () => {
    const response = await fetch(path);
    const jsonResponse = await response.json();
    console.log(jsonResponse.map((match)=> (match.videogame.name) ));

    return JSON.stringify(jsonResponse);
};

function RenderResult({onCallRestApi}) {
  const [apiResponse, setApiResponse] = useState("*** now loading ***");

  useEffect(() => {
    onCallRestApi().then(
          result => setApiResponse(result));
  },[]);

  return(
      <div>
          <h1>React App</h1>
          <p>{apiResponse}</p>
      </div>
  );
};



export default function RestApi(){
    const [data , setData] = useState({});
    const oriPath = 'https://api.pandascore.co/valorant/matches/upcoming';
    const path = "http://localhost:5000/getData"
    return(
        <div>
            {/* <button onClick={()=> callServer(path , setData)}> pandascore API</button> */}
            <div>
                  {/* <ShowData data={data} />  */}
                  <RenderResult onCallRestApi={callRestApi} />
            </div>
        </div>
    )
}

// function ShowData({data}){
//     return(
//         <div>
                
//         </div>
//     )
// }

// async function callServer(path , setData){

// const options = {
//   method: 'GET',
//   url: path,
//   // params: {
//   //   sort: 'begin_at',
//   //   page: '1',
//   //   per_page: '50'
//   // },
//   // headers: {
//   //   accept: 'application/json',
//   //   authorization: 'Bearer zZPjgAB6F45VSq8m_KkFT3lRm6WACovbn1bzx-86Q3-CPK3IAH0'
//   // }
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//     setData(response.data)
//   })
//   .catch(function (error) {
//     console.error(error);
//   });


// }