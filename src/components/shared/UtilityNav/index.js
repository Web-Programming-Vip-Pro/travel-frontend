import { Stack, Button, Text, Spacer, Select } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import { getOrderType, getOrderTypeText } from '@/utils'

const Discovery = ({
  triggerOrder,
  triggerType,
  defaultOrder,
  defaultType,
}) => {
  // 0:Stay 1:Explore 2:Food & Drink
  const [service, setService] = useState(defaultType || 0)
  const serviceList = ['Stay', 'Explore', `Food & Drink`]
  const [typeActive, setTypeActive] = useState(
    defaultOrder ? getOrderTypeText(defaultOrder) : 'Recently Added'
  )
  const type = ['Recently Added', 'Most Ratings', 'High Price', 'Low Price']
  function handleChangeType(e) {
    setTypeActive(e.target.value)
  }
  useEffect(() => {
    triggerOrder(getOrderType(typeActive))
  }, [typeActive])
  function handleService(item) {
    setService(item)
  }
  useEffect(() => {
    triggerType(service)
  }, [service])

  return (
    <Stack direction={{ mobile: 'column', tablet: 'row' }} pb="48px">
      <Stack
        display={{ mobile: 'none', tablet: 'flex' }}
        direction="row"
        spacing="16px"
        align="center"
      >
        {serviceList.map((item, index) => (
          <Button
            key={index}
            leftIcon={
              <Icon
                icon="bx:bx-dollar-circle"
                color={index !== service ? '#777E90' : ''}
              />
            }
            px="10px"
            py="6px"
            bg={index === service ? 'neutrals.3' : ''}
            variant={index !== service ? 'ghost' : 'none'}
            onClick={() => handleService(index)}
          >
            <Text
              textStyle="button-2"
              color={index === service ? 'neutrals.8' : 'neutrals.4'}
            >
              {item}
            </Text>
          </Button>
        ))}
      </Stack>
      <Spacer />
      {/* In Mobile display Select */}
      <Select
        onChange={handleChangeType}
        display={{ mobile: 'block', tablet: 'none' }}
        border="none"
      >
        {serviceList.map((content, index) => (
          <option key={index} value={content}>
            {content}
          </option>
        ))}
      </Select>
      {/*  */}
      <Select onChange={handleChangeType} w={{ tablet: '256px' }} border="none">
        {type.map((content, index) => (
          <option key={index} value={content}>
            {content}
          </option>
        ))}
      </Select>
    </Stack>
  )
}

export default Discovery
