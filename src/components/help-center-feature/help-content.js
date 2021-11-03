import {
  Text,
  Flex,
  ListItem,
  Box,
  List,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
  Select,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import React, { useState } from 'react'

const helpHeaderContent = {
  upperDescription: 'learn how to get started',
  title: 'Frequently Asked Questions',
  belowDescription:
    'Join Stacks community now to get free updates and also alot of freebies are waiting for you or Contact Support',
}

const helpContents = [
  {
    title: 'How does it work',
    details:
      'The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."',
  },
  { title: 'How to start with Stacks', details: '' },
  { title: 'Dose it suppport Dark Mode', details: '' },
  { title: 'Does it support Auto-Layout', details: '' },
  { title: 'What is Stacks Design System', details: '' },
]

const menuData = [
  {
    icon: 'ant-design:home-filled',
    title: 'General',
  },
  {
    icon: 'bi:circle-square',
    title: 'Support',
  },
  { icon: 'bi:lightning-charge-fill', title: 'Bookings' },
  { icon: 'ph:pen-nib-fill', title: 'Host' },
]
function HelpHeader({ upperDescription, title, belowDescription }) {
  return (
    <Flex
      w={{ base: '311px', tablet: '736px', desktop: '736px' }}
      direction="column"
      align="center"
    >
      <Text textStyle="hairline-2" color="neutrals.4" mb="12px" align="center">
        {upperDescription}
      </Text>
      <Text textStyle="headline-2" color="neutrals.2" align="center">
        {title}
      </Text>
      <Text
        w={{ base: '311px', tablet: '640px', desktop: '640px' }}
        textStyle="body-2"
        color="neutrals.3"
        align="center"
        mt="20px"
      >
        {belowDescription}
      </Text>
    </Flex>
  )
}

function HelpDetails({ helpContents }) {
  var renderedContent =
    helpContents === undefined
      ? null
      : helpContents.map((content) => {
          return (
            <AccordionItem key={content.title}>
              <h2>
                <AccordionButton boxShadow="none !important">
                  <Box
                    textStyle="body-2-bold"
                    pt="32px"
                    pb="40px"
                    flex="1"
                    textAlign="left"
                  >
                    {content.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                textAlign="left"
                pb="36px"
                textStyle="body-2"
                color="neutrals.4"
              >
                {content.details}
              </AccordionPanel>
            </AccordionItem>
          )
        })
  return <Accordion allowToggle="true">{renderedContent}</Accordion>
}


function Menu({ menu }) {
  let [activeMenu, setActiveMenu] = useState(0);
  function onChangeMenu(index) {
    setActiveMenu(index);
  }
  return (
    <Box>
      <Stack
        display={{ base: 'none', tablet: 'block', desktop: 'block' }}
        spacing="40px"
      >
        <List align="initial" spacing={10}>
          {menu.map((content, index) => (
            <ListItem key={index} transition="color 0.15s ease-in-out">
              <Flex align="center">
                <Box color="neutrals.4" mr="16.67px">
                  <Icon icon={content.icon} />
                </Box>
                <Text
                  onClick={() => onChangeMenu(index)}
                  textStyle="button-2"
                  color={
                    index === activeMenu ? 'neutrals.2' : 'neutrals.4'
                  }
                  _hover={{ color: 'neutrals.2', cursor: 'pointer' }}
                  display="inline-block"
                >
                  {content.title}
                </Text>
              </Flex>
            </ListItem>
          ))}
        </List>
      </Stack>
      <Box display={{ base: 'block', tablet: 'none', desktop: 'none' }}>
        <Select boxShadow="none !important" w="311px" h="48px">
          {menu.map((content, index) => (
            <option onClick={() => onChangeMenu(index)} key={index}>
              {content.title}
            </option>
          ))}
          ;
        </Select>
      </Box>
    </Box>
  )
}
const HelpContent = () => {
  return (
    <Box
      p={{ base: '136px 32px 0', tablet: '112px 80px', desktop: '136px 180px' }}
    >
      <Flex direction="column">
        <Box align="center">
          <HelpHeader {...helpHeaderContent} />
        </Box>
        <Flex
          pt={{ base: '0', tablet: '80px', desktop: '80px' }}
          direction={{ base: 'column', tablet: 'row', desktop: 'row' }}
        >
          <Box align="center" py={{ base: '40px', tablet: '0', desktop: '0' }}>
            <Menu menu={menuData} />
          </Box>
          <Box w="100%">
            <Box
              align="center"
              ml={{ base: '0', tablet: '140px', desktop: '300px' }}
            >
              <HelpDetails helpContents={helpContents} />
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default HelpContent
