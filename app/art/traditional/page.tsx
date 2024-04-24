import React from 'react'
import Image from 'next/image'
import ArtTile from '@/app/components/ArtTile/ArtTile'
import PageLayout from '@/app/layouts/PageLayout'

const TraditionalArt = () => {
  return (
    <PageLayout title="Traditional Art">
      <div className='flex flex-1 gap-5'>
        <ArtTile alt='crying-eye' path={`/assets/crying-eye.jpg`} caption='Pencil sketch of a crying eye!' title='Crying Eye'/>
        <ArtTile alt='lighthouse' path={`/assets/lighthouse.jpg`} caption='A play of acrylic paints' title='The Lighthouse'/>
      </div>
    </PageLayout>
  )
}

export default TraditionalArt