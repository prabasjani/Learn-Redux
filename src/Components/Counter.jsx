import { useSelector, useDispatch } from "react-redux"
import {
  increament,
  decreament,
  reset,
  addValue,
} from "../features/CounterSlice"
import { useState } from "react"

const Counter = () => {
  const countValue = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  const [add, setAdd] = useState(0)
  const addValues = Number(add) || 0

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold mb-4">{countValue}</h1>
      <div className="flex items-center gap-3">
        <button
          className="px-5 py-2 rounded-md font-semibold text-white bg-green-500"
          onClick={() => dispatch(increament())}
        >
          +
        </button>
        <button
          className="px-5 py-2 rounded-md font-semibold text-white bg-red-500"
          onClick={() => dispatch(decreament())}
        >
          -
        </button>
        <button
          className="px-5 py-2 rounded-md font-semibold text-white bg-zinc-500"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>

      <input
        type="text"
        onChange={(e) => setAdd(e.target.value)}
        className="border border-indigo-500 px-4 py-2 my-4"
      />
      <button
        className="px-5 py-2 rounded-md font-semibold text-white bg-blue-500"
        onClick={() => dispatch(addValue(addValues))}
      >
        Add
      </button>
    </div>
  )
}

export default Counter
