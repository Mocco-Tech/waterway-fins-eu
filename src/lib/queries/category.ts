import { getData } from "../getData";

export async function getCategory(handle: string) {
  const Category = `#graphql
    query Category {
    collectionByHandle(handle: "${handle}") {
      handle
      title
      description
      image {
        src
        url
        altText
      }
      products(first: 250) {
        edges {
          cursor
          node {
            handle
            title
            description
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            variants(first: 1) {
              edges {
                node {
                  id
                  weight
                }
              }
            }
            images(first: 2) {
              edges {
                node {
                  id
                  url
                }
              }
            }
            id
            publishedAt
            brand: metafield(namespace: "custom", key: "brand") {
              key
              value
              references(first: 10) {
                edges {
                  node {
                    ... on Metaobject {
                      id
                      handle
                      type
                      fields {
                        key
                        value
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      seo {
        title
        description
      }
      }
  }`;
  const { props } = await getData(Category);
  return props.data;
}
