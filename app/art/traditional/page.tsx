import React from 'react'
import Image from 'next/image'
import ArtTile from '@/app/components/ArtTile/ArtTile'
import PageLayout from '@/app/layouts/PageLayout'

const TraditionalArt = () => {
  return (
    <PageLayout title="Traditional Art">
      <div className='gap-5 sm:flex sm:flex-1'>
        <ArtTile alt='crying-eye' path={`/assets/crying-eye.jpg`} caption='Pencil sketch of a crying eye!' title='Crying Eye'/>
        <ArtTile alt='lighthouse' path={`/assets/lighthouse.jpg`} caption='A play of acrylic paints' title='The Lighthouse'/>
      </div>
    </PageLayout>
  )
}

export default TraditionalArt