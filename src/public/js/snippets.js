const deleteModal = document.getElementById('delete-courses');
var courseId = '';
var btnDeleteCourse = document.getElementById('btn-delete-course');
var deleteForm = document.forms['delete-course-form'];
var checkboxAll = $('#checkbox-all');
var courseItemCheckbox = $('input[name="courseId[]"]');
var checkAllSubmitBtn = $('.btn-check-all-submit');
var containerForm = document.forms['container-form'];

if (deleteModal) {
  deleteModal.addEventListener('show.bs.modal', (event) => {
    // Button that triggered the modal
    const button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    courseId = button.getAttribute('data-id');
    console.log(courseId);
  });
}

btnDeleteCourse.onclick = function () {
  deleteForm.action = '/courses/' + courseId + '?_method=DELETE';
  deleteForm.submit();
};

checkboxAll.on('change', (e) => {
  var isChecked = e.target.checked;
  courseItemCheckbox.prop('checked', isChecked);
  renderCheckAllSubmitBtn();
});

courseItemCheckbox.on('change', (e) => {
  var isCheckedAll =
    courseItemCheckbox.length === $('input[name="courseId[]"]:checked').length;
  checkboxAll.prop('checked', isCheckedAll);
  renderCheckAllSubmitBtn();
});

function renderCheckAllSubmitBtn() {
  var checkAllCount = $('input[name="courseId[]"]:checked').length;
  if (checkAllCount) {
    checkAllSubmitBtn.removeClass('disabled');
  } else {
    checkAllSubmitBtn.addClass('disabled');
  }
}

checkAllSubmitBtn.on('submit', function (e) {
  var isSubmitted = $(this).hasClass('disabled');
  if (isSubmitted) {
    e.preventDefault();
  }
});
