import React from 'react'

export default function viewNews({NewsData}) {
    // console.log(NewsData)
  return (
    <div>
      <h1>{NewsData.heading} :</h1>
      <img src= {`/news/${NewsData.image}`} alt="No image" />
      <h3>{NewsData.description}</h3>
      <p>{NewsData.text}</p>
    </div>
  )
}
