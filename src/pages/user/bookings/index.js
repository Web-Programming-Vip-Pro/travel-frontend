import { useState } from 'react'
import {
  Box,
  Stack,
  Button,
  Grid,
  Flex,
  Text,
  Badge,
  Divider,
  useBreakpointValue,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import Image from 'next/image'
import ProtectedPage from '@/components/shared/ProtectedPage'
import SelectType from '@/components/userpage/booking/SelectType'
import { usePlacesByTransaction } from '@/services/transaction'
import { useSession } from 'next-auth/react'
import { getTransactionStatus } from '@/utils'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const Bookings = () => {
  const PAGE = 0
  const [limit, setLimit] = useState(10)
  const [status, setStatus] = useState(-1)
  const templateColumns = useBreakpointValue({
    base: 'repeat(1, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
  })
  const { data: session } = useSession()
  const userId = session && session.user && session.user.id
  const { places, isLoading, error } = usePlacesByTransaction(
    userId,
    status,
    PAGE,
    limit
  )
  function handleLoadMore() {
    setLimit(limit + 10)
  }
  return (
    <ProtectedPage>
      <Box
        overflow="hidden"
        px={{ mobile: '32px', tablet: '80px', desktop: '160px' }}
        pt={{ mobile: '32px', tablet: '32px', desktop: '48px' }}
      >
        <SelectType onSelect={setStatus} />
        {isLoading ? (
          <Stack justify="center" align="center">
            <Icon icon="eos-icons:bubble-loading" fontSize="50px" />
          </Stack>
        ) : (
          <Grid templateColumns={templateColumns} gap={4} py="24px">
            {places &&
              places.map((place, index) => (
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
                      <Box
                        width={{
                          mobile: '311px',
                          tablet: '266px',
                          desktop: '352px',
                        }}
                        height={{ mobile: '240px', desktop: '240px' }}
                        position="relative"
                      >
                        <Image
                          src={place.images.cover}
                          alt={place.title}
                          layout="fill"
                          objectFit="cover"
                          position="absolute"
                          unoptimized
                        />
                        <Badge
                          position="absolute"
                          top="16px"
                          left="16px"
                          textStyle="hairline-2"
                          bg="neutrals.8"
                          p="8px"
                        >
                          {getTransactionStatus(place.status_place)}
                        </Badge>
                      </Box>

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
                        <Flex pt="16px" align="center" justify="space-between">
                          <Box>
                            <Text textStyle="body-2" color="neutrals.1">
                              {dayjs(place.transaction.created_at).fromNow()}
                            </Text>
                          </Box>
                          <Stack spacing="2px" direction="row" align="center">
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
                          </Stack>
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
    </ProtectedPage>
  )
}

Bookings.title = 'Bookings | Fleety'

export default Bookings
