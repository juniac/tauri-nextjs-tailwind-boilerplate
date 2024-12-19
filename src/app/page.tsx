"use client"

import { useState } from "react"
import Image from "next/image"
import { invoke } from "@tauri-apps/api/core"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const [message, setMessage] = useState<string>("")

  const onClickFirstButton = async () => {
    console.log("first button clicked")
    const name = "jeong-un, kim"
    const result = await invoke("greet", { name })
    setMessage(result as string)
  }
  const onClickSecondButton = async () => {
    console.log("second button clicked")
    const result = await invoke("say_hello")
    setMessage(result as string)
  }

  return (
    <div className="h-screen">
      <div className="relative h-full flex-col items-center justify-center grid lg:max-w-none px-0">
        <div className="relative z-20 flex items-center text-5xl font-extralight my-auto mx-auto">
          <Image
            alt="logo"
            src="/images/logo/logo.svg"
            width={600}
            height={100}
          />
        </div>
        <p className="text-center">{message}</p>
        <div className="relative z-20 flex items-center text-5xl font-extralight my-auto mx-auto space-x-5">
          <Button type="button" onClick={onClickFirstButton}>
            Test Button 1
          </Button>
          <Button
            type="button"
            onClick={onClickSecondButton}
            variant="secondary"
          >
            Test Button 2
          </Button>
        </div>
      </div>
    </div>
  )
}
