
export default function Skeleton() {
  return (
    <div>
      <div className="w-full flex justify-around text-white animate-pulse ">
            <div className="flex flex-col gap-6 justify-center items-center mr-10">
                <p className="bg-white/40  h-6 w-24 rounded-xl"></p>
                <div className="w-24 h-24 rounded-full bg-white/40"></div>
            </div>
            <div className="flex flex-col mt-4 gap-2 border-l-2 pl-10">
                <p className="bg-white/40  h-6 w-24 rounded-xl"></p>
                <p className="bg-white/40  h-6 w-24 rounded-xl"></p>
                <p className="bg-white/40  h-6 w-24 rounded-xl"></p>
                <p className="bg-white/40  h-6 w-24 rounded-xl"></p>
            </div>
        </div>
    </div>
  )
}
