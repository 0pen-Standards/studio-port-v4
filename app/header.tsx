'use client'

import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/selected-projects" className="font-medium text-black dark:text-white">
          Nouhtrang Thao
        </Link>
   
      </div>
    </header>
  )
}
