import { repeatedElement } from '@plasmicapp/host'
import { dato } from '@utility/initDato'
import useSWR from 'swr'
import React, { createContext } from 'react'
import Link from 'next/link'


/* 
Here's an example of a Plasmic ready component.
There are two steps to it; 
1. Define and export the components (and children) as you would with normal code
2. Register them in '@utility/initPlasmic' so that plasmic has them ready for the dragondrop

In this example, we're grabbing articles from datocms.com, iterating through them and passing them to Plasmic's 'repeatedElement' component.
In 

*/

const ProductContext = createContext()

export const ProductCard = ({ className, children }) => {
    const GET_ALL_ARTICLES_QUERY = `query GetAllArticles {
        allArticles {
          id
          slug
          title
        }
      }
      `
    const fetcher = async () => {
        return await dato({ query: GET_ALL_ARTICLES_QUERY }).then(response => {
            return response
        })
    }
    const { data } = useSWR(GET_ALL_ARTICLES_QUERY, fetcher)

    return (
        <div className={className}>
            {data?.allArticles.map((article, i) => (
                <ProductContext.Provider value={article} key={article.id}>
                    {repeatedElement(i === 0, children)}
                </ProductContext.Provider>

            ))}

        </div>
    )
}


export const ProductTitle = (props) => {
    return (
        <ProductContext.Consumer>
            {productData => <Link href={`blog/${productData?.slug}`} className={props.className}>{productData?.title ?? 'This must be inside a ProductCollection or ProductBox'}</Link>}
        </ProductContext.Consumer>
    );
}



