import { apiBaseUrl } from '~/constants/variables';

export default defineEventHandler(async () => {
  try {
    const response = await fetch(`${apiBaseUrl}/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING`, {
      method: 'GET',
      headers: {
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.5',
        Connection: 'keep-alive',
        DNT: '1',
        Host: 'www.swiggy.com',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/115.0',
      },
    });
    const result = await response.json();
    return result?.data?.cards.length
      ? result?.data?.cards.map((card: any) => {
          return {
            id: card?.card?.card?.id,
            title: card?.card?.card?.title,
            header: card?.card?.card?.header,
            layout: card?.card?.card?.layout,
            lists: card?.card?.card?.gridElements?.infoWithStyle,
            restaurantCount: card?.card?.card?.restaurantCount,
            facetList: card?.card?.card?.facetList,
            sortConfigs: card?.card?.card?.sortConfigs,
            cities: card?.card?.card?.cities,
            brands: card?.card?.card?.brands,
            cuisines: card?.card?.card?.cuisines,
          };
        })
      : [];
  } catch (error: any) {
    return error;
  }
});
