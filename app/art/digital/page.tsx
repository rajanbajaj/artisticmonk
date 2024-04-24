import ArtTile from '@/app/components/ArtTile/ArtTile'
import PageLayout from '@/app/layouts/PageLayout'
import React from 'react'

const DigitalArt = () => {
  return (
    <PageLayout title="Digital Art">
      <div className='flex flex-1 gap-5'>
        <ArtTile alt='rb' path={`/assets/RB.svg`} caption='Logo RB' title='RB Logo'/>
        <ArtTile alt='pixel-art' path={`/assets/pixel-art.svg`} caption='Pixel art' title='Pixel Art of Self'/>
      </div>
    </PageLayout>
  )
}

export default DigitalArt