// module.exports = function SortMiddleware(res, req, next) {

//   res.locals._sort = {
//     enabled: false,
//     type: 'default',
//   };

//   if (req.query.hasOwnProperty('_sort')) {
//     Object.assign(res.locals._sort, {
//       enabled: true,
//       type: req.query.type,
//       column: req.query.column,
//     });
//   }
//   next();
// };
// sortMiddleware.js

const SortMiddleware = function (req, res, next) {
  // Thêm logic xử lý sort ở đây
  res.locals._sort = {
    enabled: false, // Nếu muốn sử dụng sort, đặt giá trị này là true
    type: 'default', // Loại sắp xếp mặc định, bạn có thể thay đổi theo nhu cầu của mình
    column: 'default', // Thêm trường column mặc định
  };

  if (req.query.hasOwnProperty('_sort')) {
    res.locals._sort.enabled = true;
    res.locals._sort.type = req.query.type; // Sửa thành req.query.type
    res.locals._sort.column = req.query.column; // Thêm trường column
  }

  next(); // Chuyển điều khiển sang middleware hoặc route tiếp theo
};

module.exports = SortMiddleware;

module.exports = SortMiddleware;
