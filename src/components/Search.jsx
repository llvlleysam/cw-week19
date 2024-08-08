import { useRef, useState } from "react"

export default function Search({searchQuery}) {
  const[searchVal,setSearchVal]=useState("")
  return (
    <div className="space-x-2">
      <input value={searchVal} onChange={(e)=>{
        setSearchVal((e.target.value).trim())
        }} className="pl-4 py-2 border border-black rounded-xl drop-shadow-lg" type="text" placeholder="City Name ..."/>
      <button onClick={()=>{
        searchQuery(searchVal)
        setSearchVal("")
        }} className="py-2 px-4 rounded-lg bg-indigo-400 drop-shadow-lg text-white " disabled={searchVal==="" || searchVal===" "}>Search</button>
    </div>
  )
}
