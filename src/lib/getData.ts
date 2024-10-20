import { client } from "./shopifyClient";

export async function getData(GRAPHQL_QUERY: string) {
  const response = await fetch(client.getStorefrontApiUrl(), {
    body: JSON.stringify({
      query: GRAPHQL_QUERY,
    }),
    headers: client.getPrivateTokenHeaders({ buyerIp: "..." }),
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = await response.json();

  return { props: json };
}
