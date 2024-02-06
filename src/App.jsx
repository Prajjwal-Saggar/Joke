import Joke from "./Components/Joke";

import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./Components/Loader";

function App() {
  const [loading, setLoading] = useState(false);
  const[content, setContent]  = useState([]);
  
  async function apiCall() {
    setLoading(true);
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then(response =>{
      if(!response.ok){
        throw new Error('Network Response Was not ok');
      }
      setLoading(false);
      return response.json();

    })
    .then(data => {
      setContent(data.joke);
      console.log(data);
    
     
    })
    .catch(error =>{
      console.error('Error: ' , error);
    });

 
  };
  
 
   

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div >
    <nav className="bg-[#262626] text-white text-center text-4xl font-semibold border-b-2 border-[#ffa516]">Random Joke</nav>
      <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-[#161616]">
        <div className="w-[350px] h-[400px] flex flex-col items-center gap-2 rounded-lg bg-[#262626]">{
          (loading==true)?<Loader></Loader>:<Joke content ={content}></Joke>
        }
        
          <button onClick={apiCall} className="bg-[#ffa516] w-[100px] h-[35px] text-center mb-5 rounded-md pl-[6px] pr-[6px] pt-[3px] pb-[3px] text-white font-semibold text-lg">Generate</button>
        </div>
      </div>
    </div>
  );
}

export default App;
