export class UnsplashAPI {
  #page = 1;
  #query = '';
  #totalPages = 0;
  #perPage = 30;

  getPhotos() {
    const url = `https://api.unsplash.com/search/photos?page=${
      this.#page
    }&query=${
      this.#query
    }&client_id=LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc&per_page=${
      this.#perPage
    }&color=black_and_white&orientation=portrait`;

    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
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
