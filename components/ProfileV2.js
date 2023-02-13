import React from 'react'
import Image from 'next/image'
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material'
function ProfileV2() {
  return (
    <div className=" block space-y-[10x] lg:mt-[80px]">
      <div className="absolute">
        <div className="mx-auto block lg:w-[300px]">
          <div className="flex justify-center">
            <div className="">
              <Image
                src="https://cdn.discordapp.com/attachments/839784544798638090/1074610213111480320/profile-pic_3.png"
                height={150}
                width={150}
                objectFit="cover"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex space-x-8">
              <span className="animate-shimmer text-blue-500">[</span>
              <p className="font-serif text-gray-200">Hi! I'm Lawe</p>
              <span className="animate-shimmer text-blue-500">]</span>
            </div>
          </div>
        </div>
        <div className="mt-[12px] flex justify-center space-x-[18px]">
          <Instagram className="text-32 text-gray-300" />
          <GitHub className="text-32 text-gray-300" />
          <LinkedIn className="text-32 text-gray-300" />
        </div>
      </div>
    </div>
  )
}

export default ProfileV2
