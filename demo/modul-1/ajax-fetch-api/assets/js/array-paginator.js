export class Paginator {
  data;
  maxPerPage;
  currentPage;
  totalPages;

  constructor(data, maxPerPerPage, currentPage) {
    this.maxPerPage = maxPerPerPage || 5;
    this.currentPage = currentPage || 1;
    this.load(data);
  }
  load(data) {
    this.data = data;
    this.totalPages = Math.ceil(data.length / this.maxPerPage);
  }
  get current() {
    return this.currentPage;
  }

  set current(page) {
    if (page) this.currentPage = page;
  }

  get all() {
    return this.data ? this.data : [];
  }

  get total() {
    return this.totalPages ? this.totalPages : 0;
  }
  push(newData) {
    if (!this.data) return;
    this.data.push(newData);
    this.totalPages = Math.ceil(this.data.length / this.maxPerPage);
  }
  set(newData) {
    this.load(newData);
    return true;
  }
  clear() {
    this.data;
    this.totalPages = 0;
  }

  page(page) {
    if (!page) retur;
    this.current = page;
    const skipValues = page * this.maxPerPage - this.maxPerPage;
    const pageArray = this.data?.slice(
      skipValues,
      skipValues + this.maxPerPage
    );
    if (!pageArray || !pageArray.length) retur;
    return pageArray;
  }

  first() {
    return this.page(1);
  }

  last() {
    return this.page(this.totalPages ? this.totalPages : 0);
  }

  next() {
    return this.page(this.currentPage + 1);
  }

  previous() {
    return this.page(this.currentPage - 1);
  }

  hasFirst() {
    return this.totalPages ? true : false;
  }

  hasPrevious(index) {
    if (index) {
      return index - 1 > 0 ? true : false;
    }
    return this.currentPage - 1 > 0 ? true : false;
  }
  hasNext(index) {
    if (index) {
      return this.totalPages ? index + 1 < this.totalPages : false;
    }
    return this.totalPages ? this.currentPage + 1 < this.totalPages : false;
  }

  hasLast() {
    return this.totalPages ? true : false;
  }
}
