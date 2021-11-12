import React from 'react'
import { Flex, Box, Stack } from '@chakra-ui/react'
import AgencyBackground from '@/components/agencyFeature/AgencyBackground'
import AgencyInforCard from '@/components/agencyFeature/AgencyInforCard'
import AgencyDescription from '@/components/agencyFeature/AgencyDescription'
import AgencyListing from '@/components/agencyFeature/AgencyListing'
import DisplayComments from '@/components/shared/DisplayComments'

const commentsProperties = {
  totalCount: 3,
  sortOptions: ['Newest', 'Most Rated', 'Least Rated'],
  comments: [
    {
      avatarSrc:
        'https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg',
      name: 'Myrtie Runolfsson',
      commentDetails:
        'We had the most spectacular view. Unfortunately it was very hot in the room from 2-830 pm due to no air conditioning and no shade.',
      timeStamp: 'about 1 hour ago',
      rate: 5,
    },
    {
      avatarSrc:
        'https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg',
      name: 'Osbaldo Beahan',
      commentDetails:
        'Stunning views of Queenstown. Very peaceful. Love it so much. Definitely gonna come back and visit.',
      timeStamp: 'about 1 hour ago',
      rate: 4,
    },
    {
      avatarSrc:
        'https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg',
      name: 'Tobin Hackett',
      commentDetails: 'Best place I stayed in all of NZ. 🙌 🎉 😎',
      timeStamp: '1 day ago',
      rate: 3,
    },
    {
      avatarSrc:
        'https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg',
      name: 'Osbaldo Beahan',
      commentDetails:
        'Stunning views of Queenstown. Very peaceful. Love it so much. Definitely gonna come back and visit.',
      timeStamp: 'about 1 hour ago',
      rate: 2,
    },
    {
      avatarSrc:
        'https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg',
      name: 'Tobin Hackett',
      commentDetails: 'Best place I stayed in all of NZ. 🙌 🎉 😎',
      timeStamp: '1 day ago',
      rate: 1,
    },
  ],
}
const Agency = () => {
  return (
    <Box>
      <Box px={{ tablet: '40px', desktop: '80px' }}>
        <AgencyBackground />
      </Box>
      <Box px={{ base: '32px', tablet: '80px', desktop: '160px' }}>
        <Flex direction={{ base: 'column', desktop: 'row' }}>
          <Box
            mr={{ base: '0px', desktop: '80px' }}
            mt={{ base: '0', tablet: '30px', desktop: '20px' }}
            w={{ base: 'fit-content', tablet: '100%', desktop: 'fit-content' }}
          >
            <AgencyInforCard />
          </Box>
          <Stack
            spacing="64px"
            mt={{ base: '32px', tablet: '48px', desktop: '80px' }}
          >
            <Box>
              <AgencyDescription />
            </Box>
            <Box>
              <AgencyListing />
            </Box>
            <Box>
              <DisplayComments commentsProperties={commentsProperties} />
            </Box>
          </Stack>
        </Flex>
      </Box>
    </Box>
  )
}

export default Agency
