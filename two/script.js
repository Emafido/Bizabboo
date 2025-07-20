const toggle = document.getElementById('toggleBilling');
const monthly = document.querySelectorAll('.front');
const yearly = document.querySelectorAll('.back');

toggle.addEventListener('change', function () {
  if (this.checked) {
    monthly.forEach(el => el.classList.add('hidden'));
    yearly.forEach(el => el.classList.remove('hidden'));
  } else {
    yearly.forEach(el => el.classList.add('hidden'));
    monthly.forEach(el => el.classList.remove('hidden'));
  }
});
const toast = document.getElementById('toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove('hidden');
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
    toast.classList.add('hidden');
  }, 1000); 
}

document.querySelectorAll('.soon').forEach(el => {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    showToast("🚧 This feature is still in production.");
  });
});
