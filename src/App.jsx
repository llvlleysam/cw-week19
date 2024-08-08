import { useQuery } from "@tanstack/react-query";
import "./App.css";
import Cart from "./components/Cart";
import Search from "./components/Search";
import axios from "axios";
import { url } from "./Constant/servise";
import { useState } from "react";

function App() {
  const[searchText,setSearchText]=useState("london")
  const {data,isLoading,isError,error}=useQuery({
    queryKey:["city",searchText],
    queryFn : async()=>{
      const response = await axios.get(`${url}?q=${searchText}&appid=7834fc1378fdf2ccb6a6d52cf1483147`)
      return response.data
    }
  })
console.log(error)
  return (
    <div className="bg-gradient-to-r from-sky-400 to-blue-500 w-full h-screen flex flex-col gap-8 justify-center items-center">
      <Search searchQuery={(text)=>setSearchText(text)} />
      {<Cart loading={isLoading} searchV={searchText} error={error} data={data}/>}
    </div>
  );
}

export default App;
