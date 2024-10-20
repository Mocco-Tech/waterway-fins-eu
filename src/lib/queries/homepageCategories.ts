import { getData } from "../getData";

export async function getHomepageCategories() {
  const collections = `#graphql
    query HomepageCollections {
        monofins: collectionByHandle(handle: "monofins") {
            handle
            title
            image {
            src
            }
        } 
        freedivingFins: collectionByHandle(handle: "freediving-fins") {
            handle
            title
            image {
            src
            }
        }
        lifesavingFins: collectionByHandle(handle: "lifesaving-fins") {
            handle
            title
            image {
            src
            }
        }
        uwRugbyFins: collectionByHandle(handle: "underwater-rugby-fins") {
            handle
            title
            image {
            src
            }
        }
        uwHockeyFins: collectionByHandle(handle: "underwater-hockey-fins") {
            handle
            title
            image {
            src
            }
        }
    }`;
  const { props } = await getData(collections);
  return props.data;
}
