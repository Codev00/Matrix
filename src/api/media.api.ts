import privateClient from "./config/private.client";
import publicClient from "./config/public.client";

const mediaEndpoints = {
   list: ({ mediaType, mediaCategory, page }: any) =>
      `${mediaType}/${mediaCategory}?page=${page}`,
   detail: ({ mediaType, mediaId }: any) => `${mediaType}/detail/${mediaId}`,
   search: ({ mediaType, query, page }: any) =>
      `${mediaType}/search?query=${query}&page=${page}`,
};

const mediaApi = {
   getList: async ({ mediaType, mediaCategory, page }: any) => {
      try {
         const res = await publicClient.get(
            mediaEndpoints.list({ mediaType, mediaCategory, page })
         );
         return { res };
      } catch (error) {
         return { error };
      }
   },
   detail: async ({ mediaType, mediaId }: any) => {
      try {
         const res = await publicClient.get(
            mediaEndpoints.detail({ mediaType, mediaId })
         );
         return { res };
      } catch (error) {
         return { error };
      }
   },
   search: async ({ mediaType, query, page }: any) => {
      try {
         const res = await privateClient.get(
            mediaEndpoints.search({ mediaType, query, page })
         );
         return { res };
      } catch (error) {
         return { error };
      }
   },
};
