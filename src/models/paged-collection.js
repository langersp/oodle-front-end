class PagedCollection {
  constructor(items, hasMore, operations) {
    this.items = items;
    this.hasMore = hasMore;
    this.operations = operations;
  }
}

export default PagedCollection;
