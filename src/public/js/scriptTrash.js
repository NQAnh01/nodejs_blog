var btnRestore = $('.btn-restore');
var restoreForm = document.forms['restore-course-form'];
const destroyModal = document.getElementById('destroy-courses');
var btnDestroyCourse = document.getElementById('btn-destroy-course');
var destroyForm = document.forms['destroy-course-form'];

var courseId = '';
btnRestore.on('click', function (e) {
  e.preventDefault();
  courseId = $(this).data('id');
  restoreForm.action = '/courses/' + courseId + '/restore?_method=PATCH';
  restoreForm.submit();
});

if (destroyModal) {
  destroyModal.addEventListener('show.bs.modal', (event) => {
    // Button that triggered the modal
    const button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    courseId = button.getAttribute('data-id');
    console.log(courseId);
  });
}

btnDestroyCourse.onclick = function () {
  destroyForm.action = '/courses/' + courseId + '/destroy?_method=DELETE';
  destroyForm.submit();
};
