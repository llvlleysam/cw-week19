import Skeleton from "../skeleton/skeleton";

export default function Cart({data,error,loading,searchV}) {
     
let date = new Date();  
let dayOfWeek = date.getDay();  
let days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];  
let dayName = days[dayOfWeek]; 

  return (
    <div>
      <div className=" w-96 flex justify-center items-center isolate aspect-video rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5">
        {loading?<Skeleton/>:!error?<div className="w-full flex justify-around text-white">
            <div className="flex flex-col justify-center items-center">
                <p className="font-bold">{data?.weather[0].main}</p>
                <img className="w-36" src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`} alt="icon" />
            </div>
            <div className="border-l-2 pl-10">
                <p className="font-bold text-xl">{data?.name.slice(0,10)}</p>
                <p className="text-lg">{dayName}</p>
                <p className="font-bold text-[50px]">{Math.round(data?.main.temp-273.15)}°</p>
                <p className="font-bold text-[40px]">{Math.round((Math.round(data?.main.temp-273.15)) + 32)} F</p>
            </div>
        </div>:<p className="text-white text-2xl"><span className="font-bold">"{searchV}"</span> Not Found </p>}
      </div>
    </div>
  )
}
