import { Box, Flex, Text, Button, IconButton } from '@chakra-ui/react'
import Image from 'next/image'
const Country = ({ data }) => {
  console.log(data[0].imgSrc)
  return (
    <Box
      h={{ mobile: '812px', tablet: '729px', desktop: '684px' }}
      pb={{ tablet: '119px', desktop: '64px' }}
      pt={{ tablet: '32px' }}
      px={{ mobile: '16px', tablet: '80px' }}
      pos="relative"
    >
      <Flex
        direction={{ mobile: 'column-reverse', tablet: 'column' }}
        position="relative"
      >
        {/* Background of CityPage*/}
        <Box
          w="100%"
          h={{ mobile: '442px', tablet: '580px', desktop: '588px' }}
          // pos="relative"
          borderRadius={{ tablet: '24px' }}
          borderBottomStartRadius="24px"
          borderBottomEndRadius="24px"
          background={`linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)), url(${data[0].imgSrc})`}
          overflow="hidden"
          backgroundPosition="center"
          backgroundSize="cover"
        ></Box>
        {/*  Slogan and Desciption of Hero */}
        <Flex
          direction="column"
          h={{ mobile: '370px', tablet: '580px', desktop: '588px' }}
          pos={{ tablet: 'absolute' }}
          align="center"
          justify="center"
          bgGradient={{
            mobile: ' linear-gradient(180deg, #d9d9d9 0%, #f6f2f2 100%);',
            tablet: 'none',
          }}
          borderTopStartRadius="24px"
          borderTopEndRadius="24px"
          w="100%"
        >
          <Flex
            zIndex={1}
            direction="column"
            px="20px"
            wordBreak="break-all"
            color="neutrals.2"
            align="center"
            textAlign="center"
          >
            <Text
              textStyle={{
                mobile: 'headline-4',
                tablet: 'headline-1',
                desktop: 'hero',
              }}
              color={{ mobile: 'neutrals.2', tablet: 'neutrals.6' }}
              pb="16px"
            >
              {data[0].description}
            </Text>
            <Flex align="center" justify="center">
              <Image
                src={data[0].flag}
                alt={data[0].nation}
                width={24}
                height={32}
              />
              <Text
                textStyle={{ mobile: 'body-2-bold', desktop: 'body-1-bold' }}
                color={{ mobile: 'neutrals.2', tablet: 'neutrals.6' }}
                pl="8px"
              >
                {data[0].nation}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Country
