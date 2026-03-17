"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function Card({
  vid,
  name,
  rating,
  picture
}:{vid:string,picture:string,name:string,rating?:number}){

  const [score,setScore] = useState(rating ?? 0)

  return(

    <Link href={`/venue/${vid}`}>

      <div className="bg-white shadow-lg rounded-lg p-4 w-[250px]">

        <Image src={picture} alt={name} width={100} height={100}/>

        <h2>{name}</h2>

        {rating !== undefined && (

          <div className="flex gap-1">

            {[1,2,3].map((star)=>(
              <span
                key={star}
                className={`cursor-pointer ${star<=score ? "text-yellow-400":"text-gray-300"}`}
                onClick={(e)=>{
                  e.stopPropagation()
                  e.preventDefault()
                  setScore(star)
                }}
              >
                ★
              </span>
            ))}

          </div>

        )}

      </div>

    </Link>
  )
}