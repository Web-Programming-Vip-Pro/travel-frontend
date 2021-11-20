import { getPages } from '@/services/pages'
import { slugify } from '@/utils'
import { Box } from '@chakra-ui/react'
import Content from '@/components/shared/Content'

export const getStaticPaths = async () => {
  const pages = await getPages()
  const paths = pages.map((page) => ({
    params: {
      page: slugify(page.title),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const pages = await getPages()
  const page = pages.find((page) => slugify(page.title) === params.page)
  return {
    props: {
      page,
    },
  }
}

const Page = ({ page }) => {
  return (
    <Box px={{ mobile: '16px', tablet: '40px', desktop: '80px' }}>
      <Content html={page.content} />
    </Box>
  )
}

export default Page
