import { PostCard } from '@/components/PostCard'
import { Button } from '@/components/ui/button'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { Github } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <>
      <div>
        <div className="mt-10 space-y-12 pt-10">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </div>

      <div className="text-gray-400"></div>
    </>
  )
}
