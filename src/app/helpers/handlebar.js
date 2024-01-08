const Handlebars = require('handlebars');

module.exports = {
  sum: (a, b) => a + b,
  sortable: (field, sort) => {
    const sortType = sort.column === field ? sort.type : 'default';

    const icons = {
      default: 'bi bi-arrow-down-up',
      asc: 'bi bi-sort-alpha-down',
      desc: 'bi bi-sort-alpha-down-alt',
    };
    const types = {
      default: 'desc',
      asc: 'desc',
      desc: 'asc',
    };
    const icon = icons[sortType];
    const type = types[sortType];
    const href = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`);

    const iconSort = `<a href="${href}"> <i class='${icon}'></i> </a>`;
    return new Handlebars.SafeString(iconSort);
  },
};
