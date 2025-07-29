function clearPlaceholder(element) {
  element.placeholder = '';
}

document.getElementById("reservation-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Votre demande de réservation a été enregistrée !");
});
