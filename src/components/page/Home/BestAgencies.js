import {
  Box,
  Flex,
  Text,
  SimpleGrid,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Button,
  IconButton,
  Stack,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import Image from 'next/image'

function AgenciesCardList({ data }) {
  return (
    <SimpleGrid
      columns={{ mobile: 1, tablet: 3, desktop: 4 }}
      justify="space-between"
      spacingY="16px"
      maxH={{ tablet: '380' }}
      overflow="hidden"
      justifyContent="center"
    >
      {data.map((item, index) => (
        <Flex key={index} w="100%" justify="center">
          <Box
            borderRadius="20px"
            w="256px"
            h="365px"
            overflow="hidden"
            bg="neutrals.8"
            pos="relative"
            border="1px"
            borderColor="#E6E8EC"
            bgColor="neutrals.8"
          >
            <Image
              src={item.imgSrc}
              alt={item.name}
              width={256}
              height={220}
              layout="intrinsic"
            />

            <Button
              leftIcon={
                <Icon
                  icon="fluent:star-12-filled"
                  color="#FFD166"
                  width="12px"
                />
              }
              px="0"
              py="0"
              w="54px"
              h="24px"
              textStyle="caption-2-bold"
              color="neutrals.2"
              pos="absolute"
              left="16px"
              top="22px"
              variant="none"
              bg="neutrals.8"
              _hover={{
                cursor: 'default',
              }}
            >
              <Text textStyle="caption-2-bold" color="neutrals.2">
                {item.rate}
              </Text>
            </Button>

            <Box pos="absolute" w="100%" h="212px" top="48%">
              <Flex direction="column" align="center" h="100%">
                <Box
                  border="1px"
                  borderRadius="50%"
                  borderColor="neutrals.8"
                  mb="16px"
                  boxShadow="0 0 0 4px #FCFCFD"
                >
                  <Avatar h="80px" w="80px" src={item.avatar} alt={item.name} />
                </Box>
                <Box
                  as="span"
                  textStyle="body-2-bold"
                  color="neutrals.2"
                  pb="4px"
                >
                  {item.name}
                </Box>
                <Box as="span" textStyle="caption-2" color="neutrals.4">
                  {item.location}
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      ))}
    </SimpleGrid>
  )
}
const BestAgencies = ({ header }) => {
  const AgenciesData = [
    {
      imgSrc: '/assets/homepage/Bg Agencies1.jpg',
      avatar: '/assets/homepage/Avatar 1.png',
      name: 'Antone Heller',
      location: 'Gaylorside',
      rate: 4.9,
    },
    {
      imgSrc: '/assets/homepage/Bg Agencies2.jpg',
      avatar: '/assets/homepage/Avatar 2.png',
      name: 'Antone Heller',
      location: 'Gaylorside',
      rate: 4.9,
    },
    {
      imgSrc: '/assets/homepage/Bg Agencies3.jpg',
      avatar: '/assets/homepage/Avatar 3.png',
      name: 'Antone Heller',
      location: 'Gaylorside',
      rate: 4.9,
    },
    {
      imgSrc: '/assets/homepage/Bg Agencies4.jpg',
      avatar: '/assets/homepage/Avatar 4.png',
      name: 'Antone Heller',
      location: 'Gaylorside',
      rate: 4.9,
    },
  ]
  return (
    <Box
      minH="669px"
      w="100%"
      px={{ mobile: '16px', tablet: '40px', desktop: '80px' }}
      pt="64px"
    >
      <Flex pb="56px" justify={{ mobile: 'center', tablet: 'space-between' }}>
        <Text
          textAlign="center"
          textStyle={{ mobile: 'headline-4', tablet: 'headline-2' }}
        >
          {header}{' '}
          <Text as="span" color="primary.1">
            month
          </Text>{' '}
        </Text>
        <Stack
          display={{ mobile: 'none', tablet: 'flex' }}
          direction="row"
          align="center"
          spacing="2px"
        >
          <IconButton
            icon={
              <Icon
                icon="codicon:arrow-small-left"
                color="#777E90"
                width="20px"
              />
            }
            w="40px"
            h="40px"
            px="0"
            py="0"
            aria-label="arrow-left"
            variant="none"
          />
          <IconButton
            icon={
              <Icon
                icon="codicon:arrow-small-right"
                color="#777E90"
                width="20px"
              />
            }
            w="40px"
            h="40px"
            px="0"
            py="0"
            borderRadius="full"
            aria-label="arrow-right"
            variant="outline"
            boxShadow="0 0 0 2px #E6E7EC"
          />
        </Stack>
      </Flex>
      <AgenciesCardList data={AgenciesData} />
    </Box>
  )
}

export default BestAgencies
