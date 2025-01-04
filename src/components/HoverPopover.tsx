import { PropsWithChildren, ReactNode } from 'react'
import { Button } from './ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'

interface HoverPopoverProps {
  buttonText: string
  children: ReactNode
}

export default function HoverPopover({
  buttonText,
  children,
}: HoverPopoverProps) {
  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger asChild>
        <Button variant="link" className="p-0 underline">
          {buttonText}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent side="top" align="start" className="w-full">
        {children}
      </HoverCardContent>
    </HoverCard>
  )
}
