import { getPages } from '@/services/pages'
import { slugify } from '@/utils'
import { Box } from '@chakra-ui/react'
import Content from '@/components/shared/Content'
import SEO from '@/components/shared/SEO'

export const getServerSideProps = async ({ params }) => {
  const pages = await getPages()
  const page = pages.find((page) => slugify(page.title) === params.page)
  if (!page)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
      props: {},
    }
  return {
    props: {
      page,
    },
  }
}

const Page = ({ page }) => {
  return (
    <>
      <SEO title={page.title} />
      <Box px={{ mobile: '16px', tablet: '40px', desktop: '80px' }}>
        <Content html={page.content} />
      </Box>
    </>
  )
}

export default Page
