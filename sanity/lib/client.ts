import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 60,
}: {
  query: string;
  params?: Record<string, unknown>;
  revalidate?: number | false;
}): Promise<T> {
  try {
    return await client.fetch<T>(query, params, {
      next: { revalidate },
    });
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return [] as unknown as T;
  }
}
