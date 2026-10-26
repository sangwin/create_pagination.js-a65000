class Pagination {
  constructor(items, options = {}) {
    this.items = items || [];
    this.currentPage = options.currentPage || 1;
    this.itemsPerPage = options.itemsPerPage || 10;
  }

  getTotalPages() {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }

  getCurrentPage() {
    return this.currentPage;
  }

  getVisibleItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.items.slice(startIndex, endIndex);
  }

  goToPage(pageNumber) {
    const totalPages = this.getTotalPages();
    this.currentPage = Math.min(Math.max(1, pageNumber), totalPages);
    return this.getVisibleItems();
  }

  nextPage() {
    return this.goToPage(this.currentPage + 1);
  }

  prevPage() {
    return this.goToPage(this.currentPage - 1);
  }
}

// module.exports = Pagination;

// const Pagination = require('path-to-pagination');

// Example usage
const items = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`);
const pagination = new Pagination(items, { itemsPerPage: 10 });

console.log(`Total Pages: ${pagination.getTotalPages()}`);
console.log(`Current Page: ${pagination.getCurrentPage()}`);
console.log(`Visible Items: ${pagination.getVisibleItems().join(', ')}`);

console.log('---');

console.log('Next Page:');
console.log(`Current Page: ${pagination.nextPage()}`);
console.log(`Visible Items: ${pagination.getVisibleItems().join(', ')}`);

console.log('---');

console.log('Previous Page:');
console.log(`Current Page: ${pagination.prevPage()}`);
console.log(`Visible Items: ${pagination.getVisibleItems().join(', ')}`);