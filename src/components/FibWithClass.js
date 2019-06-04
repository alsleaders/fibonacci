import React, { useState } from 'react'

export default function FibWithClass() {
  const [twoAgo, setTwoAgo] = useState(0)
  const [lastOne, setLastOne] = useState(0)
  const [current, setCurrent] = useState(1)

  console.log('did this button work')
  console.log({ twoAgo })
  console.log({ lastOne })
  console.log({ current })

  const addFib = () => {
    setCurrent(current + lastOne)
    setLastOne(current)
    setTwoAgo(lastOne)
  }

  return (
    <>
      <h1>Fibonacci Numbers!</h1>
      <main className="be-centered">
        <button onClick={addFib}>Next number</button>
        <p className="display">{current}</p>
        <button
          onClick={() => {
            setTwoAgo(0)
            setLastOne(0)
            setCurrent(1)
          }}
        >
          Reset
        </button>
      </main>
    </>
  )
}
