import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Artist Name | Home',
  description: 'Artist Name is a digital artist who likes drawing cute animals.',
}

export default function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          You are in the &nbsp;
          <code className="font-mono font-bold">home page!</code>
        </p>
      </div>
      <div className="relative flex place-items-center">
        <Image
          src="/rabbit.png"
          alt="Rabbit"
          width={214}
          height={300}
        />
      </div>
    </>
  )
}
