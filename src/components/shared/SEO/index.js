import { NextSeo } from 'next-seo'
import { SeoConfig } from '@/config'

const SEO = ({ title, description }) => {
  const seoData = { ...SeoConfig }
  if (title) seoData.title = title
  if (description) seoData.description = description
  return (
    <>
      <NextSeo {...seoData} />
    </>
  )
}

export default SEO
