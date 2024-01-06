module.exports = function SortMiddleware(res, req, next) {
  res.locals.sort = {
    enabled: false,
    type: 'default',
  };

  if (req.query.hasOwnProperty('_sort')) {
    Object.assign(res.locals.sort, {
      enabled: true,
      type: req.query.type,
      column: req.query.column,
    });
  }
  next();
};
