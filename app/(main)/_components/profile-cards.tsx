import { profiles } from '@/components/data'
import { Button } from '@/components/ui/button'
import React from 'react'

const ProfileCards = () => {
  return (
    <div>
      {profiles.map((profile) => (
        <div key={profile.id}>
          <img src={profile.image} alt={profile.name} />
          <h2>{profile.name}</h2>
          <p>{profile.role}</p>
          <p>{profile.location}</p>
        </div>
      ))}
      <Button>
        Join Our Lunar Community
      </Button>
    </div>
  )
}

export default ProfileCards