import { useState } from "react";

const Counter = () => {
    const [cvalue , setCvalue] = useState(0);

        
    return ( 
        <div className="py-3">
            <section className="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-xl shadow-lg w-80">
                <h1 className="text-2xl font-semibold">Counter = {cvalue}</h1>
                <div className="flex gap-3 border border-gray-300 p-3 rounded-lg bg-white">
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                        onClick={() => {setCvalue(cvalue -1)} }
                    >
                        - Dec
                    </button>
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                        onClick={() => {setCvalue(cvalue +1)} }
                    >                
                        + Inc
                    </button>
                    <button
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                        onClick={() => {setCvalue(0)} }
                    >
                        Reset
                    </button>
                </div>
            </section>
        </div>
     );
}
 
export default Counter;