import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface BeforeAfterProps {
  title?: string
  description?: string
  beforeSrc: string
  afterSrc: string
  className?: string
}

export default function BeforeAfter({
  title,
  description,
  beforeSrc,
  afterSrc,
  className,
}: BeforeAfterProps) {
  return (
    <>
      {title && <p className="!mb-3">• {title}</p>}
      {description && (
        <>
          {description.split('\n').map((text, index) => (
            <p className="!mb-0 !mt-0 leading-[1.4]" key={text + index}>
              {text}
            </p>
          ))}
          <div className="h-5"></div>
        </>
      )}
      <div className={cn('mb-10 flex flex-col gap-5 sm:flex-row', className)}>
        <div className="w-1/2">
          <p className="!mt-0 text-center">Before</p>
          <Image
            alt=""
            src={beforeSrc}
            width={1000}
            height={0}
            style={{ height: 'auto', width: '100%' }}
          />
        </div>
        <div className="w-1/2">
          <p className="!mt-0 text-center">After</p>
          <Image
            alt=""
            src={afterSrc}
            width={1000}
            height={0}
            style={{ height: 'auto', width: '100%' }}
          />
        </div>
      </div>
    </>
  )
}
