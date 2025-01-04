import { PostCard } from '@/components/PostCard'
import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

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

      <div className="!mx-auto mt-2 flex-col gap-10 pt-2 text-gray-400 md:w-[300px] md:flex-row md:gap-10"></div>
    </>
  )
}
