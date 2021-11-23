import { Box, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useSession } from 'next-auth/react'

const BackgroundUser = () => {
  const { data } = useSession()
  const user = data.user
  const fallbackImageCover = '/assets/userpage/Hero Background.png'
  return (
    <Box
      pos="relative"
      display={{ mobile: 'none', tablet: 'block' }}
      mx={{ tablet: '40px', desktop: '80px' }}
      h={{ desktop: '400px' }}
      borderRadius="24px"
      overflow="hidden"
    >
      <Box zIndex="0" pos="relative" h="400px">
        <Image
          pos="absolute"
          src={user.image_cover || fallbackImageCover}
          alt="Image Cover"
          layout="fill"
          objectFit="cover"
          style={{
            zIndex: '-1',
          }}
          unoptimized
        />
      </Box>
    </Box>
  )
}

export default BackgroundUser
