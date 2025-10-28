'use client'

import Link from 'next/link'

export default function SelectedProjects({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Link
        href="/selected-projects"
        className="font-medium text-black dark:text-white"
      >
        Nouhtrang Thao
      </Link>
      {children}
    </section>
  )
}
