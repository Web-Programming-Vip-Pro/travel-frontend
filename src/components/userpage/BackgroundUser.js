import { Box, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import { useEffect, useState, Text } from 'react'
import { Icon } from '@iconify/react'
const BackgroundUser = () => {
  const [avatar, setAvatar] = useState(() => {
    return {
      preview: '/assets/userpage/Hero Background.png',
    }
  })
  const handleImageCover = () => {
    var linkURL = prompt('Please copy the image URL and fill in here ')
  }
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
        {avatar && (
          <Image
            pos="absolute"
            src={avatar.preview}
            alt=""
            layout="fill"
            objectFit="cover"
            style={{
              zIndex: '-1',
            }}
          />
        )}
      </Box>
      <Stack
        direction="row"
        border="2px solid white"
        display="inline-flex"
        padding="0 10px"
        borderRadius="24px"
        align="center"
        _hover={{ cursor: 'pointer' }}
        zIndex="1"
        color="neutrals.8"
        position="absolute"
        right="16px"
        bottom="16px"
      >
        <Icon icon="line-md:pencil" />
        <label
          style={{
            display: 'block',
            padding: '10px 0',
          }}
          htmlFor="image_cover"
        >
          Edit cover
        </label>
        <input
          pos="absolute"
          id="image_cover"
          name="image_cover"
          onClick={handleImageCover}
          hidden
        />
      </Stack>
    </Box>
  )
}

export default BackgroundUser
