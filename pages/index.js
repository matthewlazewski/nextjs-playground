import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This is my first Next.js application.</p>
        <p>
          Sample Text
          <a href="https://nextjs.org/learn">next tutorial.</a>
        </p>
      </section>
    </Layout>
  )
}
