// Check if user is logged in
if (!localStorage.getItem('userEmail')) {
  window.location.href = 'login.html';
}