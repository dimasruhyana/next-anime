export const getAnimeResponse = async (resource: any, query?: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const results = await response.json();
  return results;
};

export const getNestedAnimeResponse = async (
  resource: any,
  objectProperty: any
) => {
  const response = await getAnimeResponse(resource);
  return response.data.flatMap((result: any) => result[objectProperty]);
};

export const reproduce = (data: any, gap: number) => {
  let first = ~~(Math.random() * (data.length - gap));
  let last = first + gap;
  return { data: data.slice(first, last) };
};

// export default getNestedAnimeResponse;
