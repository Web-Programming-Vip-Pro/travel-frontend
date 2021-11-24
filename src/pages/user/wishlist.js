import { useState } from 'react'
import {
  Box,
  Flex,
  Text,
  Badge,
  Divider,
  Grid,
  Stack,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import ProtectedPage from '@/components/shared/ProtectedPage'
import UtilityNav from '@/components/shared/UtilityNav'
import HeaderWish from '@/components/userpage/HeaderWish'
import { useWishlistByUser } from '@/services/places/wishlist'
import { Icon } from '@iconify/react'

export default function WishList() {
  const PAGE = 0
  const [limit, setLimit] = useState(10)
  const [type, setType] = useState(0)
  const [order, setOrder] = useState('recent')
  const { wishlist, isLoading } = useWishlistByUser(PAGE, limit, type, order)
  const totalWishlist = wishlist ? wishlist.length : 0
  const templateColumns = useBreakpointValue({
    base: 'repeat(1, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(4, 1fr)',
  })
  function handleLoadMore() {
    setLimit(limit + 10)
  }
  return (
    <ProtectedPage>
      <HeaderWish totalWishlist={totalWishlist} />
      <Box h="fit-content">
        <Box
          overflow="hidden"
          px={{ mobile: '32px', tablet: '80px', desktop: '160px' }}
          pt={{ mobile: '32px', tablet: '32px', desktop: '48px' }}
        >
          <UtilityNav
            triggerOrder={(order) => setOrder(order)}
            triggerType={(type) => setType(type)}
            defaultOrder={order}
            defaultType={type}
          />
          {isLoading ? (
            <Stack justify="center" align="center">
              <Icon icon="eos-icons:bubble-loading" fontSize="50px" />
            </Stack>
          ) : (
            <Grid templateColumns={templateColumns} gap={8}>
              {wishlist &&
                wishlist.map(({ place, city }, index) => (
                  <Link href={`/place/${place.id}`} key={index} passHref={true}>
                    <Flex
                      justify="center"
                      _hover={{
                        cursor: 'pointer',
                      }}
                    >
                      <Box
                        borderRadius="20px"
                        w="256px"
                        h="380px"
                        overflow="hidden"
                        bg="neutrals.8"
                      >
                        <Image
                          src={place.images.cover}
                          alt={place.title}
                          width={256}
                          height={228}
                          unoptimized
                          layout="responsive"
                          objectFit="cover"
                        />
                        <Box p="20px">
                          <Flex justify="space-between" align="center" h="60px">
                            <Flex
                              direction="column"
                              w="142px"
                              wordBreak="break-all"
                            >
                              <Text textStyle="body-2-bold" color="neutrals.1">
                                {place.title}
                              </Text>
                              <Text textStyle="caption-2" color="neutrals.3">
                                {city.name}
                              </Text>
                            </Flex>
                            <Badge
                              w="48px"
                              h="26px"
                              variant="outline"
                              colorScheme="green"
                              textAlign="center"
                              lineHeight="26px"
                              boxShadow="0 0 0 3px #58C27D;
                "
                            >
                              ${place.price}
                            </Badge>
                          </Flex>
                          <Divider pt="16px" />
                          <Flex pt="16px" align="center" justify="center">
                            <Icon
                              icon="fluent:star-12-filled"
                              color="#FFD166"
                              width="12px"
                            />
                            <Text
                              textStyle="caption-2-bold"
                              color="neutrals-2"
                              pl="4px"
                            >
                              {place.stars}
                            </Text>
                          </Flex>
                        </Box>
                      </Box>
                    </Flex>
                  </Link>
                ))}
            </Grid>
          )}
          <Stack justify="center" align="center">
            <Box>
              <Button
                variant="outline"
                border="2px"
                my="64px"
                onClick={handleLoadMore}
              >
                Load More
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </ProtectedPage>
  )
}
