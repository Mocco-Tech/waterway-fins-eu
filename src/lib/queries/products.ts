import { getData } from "../getData";

export async function getProducts() {
  const Products = `#graphql
    query Products {
        products(first: 250) {
        edges {
          cursor
          node {
            handle
            title
            priceRange {
              minVariantPrice {
                amount
                currencyCode
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
  }`;
  const { props } = await getData(Products);
  return props.data.products;
}
