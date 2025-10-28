'use client'
import { Header } from '../header'

export default function SelectedProjects({
  children,
}: {
  children: React.ReactNode
}) {
  return (

     <section>
      <Header />
      {children}
      </section>
   
  )
}
