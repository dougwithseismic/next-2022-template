import React from 'react'
import { dato } from '@utility/initDato'
import { Layout } from '@components/Layout'
import Link from 'next/link'
import Head from 'next/head'

const Article = ({ articleData }) => {

    const { article } = articleData

    return (
        <div>
            <Layout title={article.title}>
                <div className="container">
                    <h1>{article.title}</h1>
                    <p>{article.mainContent}</p>
                    <Link href="/services" locale="fr">
                        <a>wowwww</a>
                    </Link>
                </div>
            </Layout>
        </div>
    )
}

export default Article

export const getStaticPaths = async () => {
    const GET_ALL_ARTICLES_QUERY = `query GetAllArticles {
        allArticles {
          id
          slug
          title
        }
      }
      `
    const { allArticles } = await dato({ query: GET_ALL_ARTICLES_QUERY })

    return {
        paths: allArticles.map((article) => ({ params: { article: article.slug } })),
        fallback: false
    };
};


export const getStaticProps = async (context) => {
    const { article: slug } = context.params ?? {};

    const ARTICLE_QUERY = `query GetArticleBySlug($slug: String) {
        article(filter: {slug: {eq: $slug}}) {
          id
          slug
          title
          mainContent
          authors {
            name
            slug
            id
          }
        }
      }
      `

    const articleData = await dato({ query: ARTICLE_QUERY, variables: { slug, limit: 10 } })


    if (!articleData) {
        return { notFound: true }
    }

    return {
        props: { articleData },
        revalidate: 1
    };

};

