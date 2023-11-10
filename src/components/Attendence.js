import React from 'react'

const Attendence = () => {
  return (
    <>
    <section className=' flex space-x-7 m-7 space-y-9'>
    <p className=' font-bold text-black text-3xl'>Todays Status</p>
     <div className=' space-x-9'>
     <button className=' btn btn-info'>Present</button>
      <button className=' btn btn-secondary'>Absent</button>
      <button className=' btn btn-neutral'>Holiday</button>
     </div>
    </section>
    <p className=' font-bold m-12'>Your Current Attendence Percentage is: 80%</p>
    </>
  )
}

export default Attendence