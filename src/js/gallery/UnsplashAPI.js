import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Authorization'] =
  'Client-ID LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

export class UnsplashAPI {
  #page = 1;
  #query = '';
  #totalPages = 0;
  #perPage = 30;
  #params = {
    params: {
      color: 'black_and_white',
      orientation: 'portrait',
      per_page: 30,
    },
  };

  async getPhotos() {
    const urlAXIOS = `/search/photos?page=${this.#page}&query=${this.#query}`;
    const { data } = await axios.get(urlAXIOS, this.#params);
    return data;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }

  get query() {
    return this.#query;
  }

  incrementPage() {
    this.#page += 1;
  }

  resetPage() {
    this.#page = 1;
  }
  calculateTotalPages(total) {
    this.#totalPages = Math.ceil(total / this.#perPage);
  }

  get isShowLoadMore() {
    return this.#page < this.#totalPages;
  }
}
