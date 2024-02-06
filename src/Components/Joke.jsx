import React from 'react'

function Joke(props) {
  return (
    <div className='w-[100%] p-[10px] h-[350px] flex justify-center items-center '>
       <h1 className='text-3xl text-white text-center'>{props.content}</h1>
    </div>
  )
}

export default Joke
