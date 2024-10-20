import { getData } from "../getData";

export async function getProduct(handle: string) {
  const SingleProductQuery = `#graphql
    # query SingleProductQuery @inContext(language: FR) {
    query SingleProductQuery {
      productByHandle(handle: "${handle}") {
      handle
      id
      title
      trackingParameters
      description
      descriptionHtml
      productType
      deliveryTime: metafield(namespace: "custom", key: "delivery_time") {
        value
      }
      manufacturingTime: metafield(namespace: "custom", key: "manufacturing_time") {
        value
      }
      brand: metafield(namespace: "custom", key: "brand") {
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
      relatedProducts: metafield(namespace: "shopify--discovery--product_recommendation", key: "related_products") {
        id
        key
        value
        references(first: 50) {
                edges {
                  node {
                    ... on Product {
                      id
                      handle
                      title
                      availableForSale
                      priceRange {
                        minVariantPrice {
                          amount
                          currencyCode
                        }
                      }
                      images(first: 10) {
                        edges {
                          node {
                            id
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }
      }
      metafields(identifiers: [
        {key: "size", namespace: "custom"},
        {key: "foot_width", namespace: "custom"},
        {key: "footpockets_stiffness", namespace: "custom"},
        {key: "blade_stiffness", namespace: "custom"},
        {key: "blade_width", namespace: "custom"}
        {key: "blade_length", namespace: "custom"}
        {key: "blade_colour", namespace: "custom"}
        {key: "rails_colour", namespace: "custom"}
        {key: "guides_colour", namespace: "custom"}
        {key: "preferred_wings_colour", namespace: "custom"}
        {key: "preferred_footpockets_colour", namespace: "custom"}
        {key: "monofin_main_colour", namespace: "custom"}
        {key: "monofin_secondary_colour", namespace: "custom"}
        {key: "distance", namespace: "custom"},
        ]) {
        id
        key
        value
        reference {
        ... on Metaobject {
          id
          handle
        }
      }
        references(first: 50) {
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
      variants(first: 100) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            currentlyNotInStock
            compareAtPrice {
              amount
              currencyCode
            }
            selectedOptions {
              name
              value
            }
          }
        }
      }
        images(first: 10) {
        edges {
          node {
            id
            url
          }
        }
      }
      collections(first: 10) {
        edges {
          node {
            id
            title
          }
        }
      }
      seo {
        description
        title
      }
    }
  }
  `;
  const { props } = await getData(SingleProductQuery);
  return props.data;
}
