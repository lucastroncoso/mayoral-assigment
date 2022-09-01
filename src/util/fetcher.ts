export type FetcherConfig = {
  ignore?: number[];
  dontSignOut?: boolean;
  method?: string;
  body?: BodyInit | null | undefined;
};

interface Fetcher {
  (href: string): Promise<any>;
}

export const makeFetcher =
  (config?: FetcherConfig): Fetcher =>
  async (url) => {
    let { method = 'GET', body } = config || {};
    let response = await fetch(url, {
      method,
      body,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    });

    if (response.ok) {
      let data = response.status !== 204 ? await response.json() : null;

      return data;
    } else {
      let error = new Error(response.statusText);
      Object.assign(error, { code: response.status });
      throw error;
    }
  };
