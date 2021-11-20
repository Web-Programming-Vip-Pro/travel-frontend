import ReactHTMLParser, { processNodes } from 'react-html-parser'
import {
  Text,
  Stack,
  ListItem,
  UnorderedList,
  OrderedList,
} from '@chakra-ui/react'

function transform(node, index) {
  if (node.type === 'tag') {
    console.log(node)
    switch (node.name) {
      case 'h1':
        return <Text textStyle="headline-3">{processNodes(node.children)}</Text>
      case 'h2':
        return <Text textStyle="headline-3">{processNodes(node.children)}</Text>
      case 'h3':
        return <Text textStyle="headline-3">{processNodes(node.children)}</Text>
      case 'h4':
        return <Text textStyle="headline-4">{processNodes(node.children)}</Text>
      case 'h5':
        return <Text textStyle="headline-5">{processNodes(node.children)}</Text>
      case 'p':
        return <Text textStyle="body">{processNodes(node.children)}</Text>
      case 'ul':
        return (
          <UnorderedList px="16px">{processNodes(node.children)}</UnorderedList>
        )
      case 'ol':
        return (
          <OrderedList px="16px">{processNodes(node.children)}</OrderedList>
        )
      case 'li':
        return (
          <ListItem textStyle="body" key={index}>
            {processNodes(node.children)}
          </ListItem>
        )
    }
  }
}

const options = {
  decodeEntities: true,
  transform,
}

const Content = ({ html }) => {
  const content = ReactHTMLParser(html, options)
  return (
    <Stack
      spacing="8px"
      px={{ mobile: '20px', tablet: '40px', desktop: '80px' }}
    >
      {content}
    </Stack>
  )
}

export default Content
