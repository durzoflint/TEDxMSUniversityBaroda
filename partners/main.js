/*var modal = document.getElementById('modal');

function openModal(card) {
	var photo = card.getElementsByClassName("speaker-image")[0].src;
	var name = card.getElementsByTagName("p")[0].innerText;
	var shortDescription = card.getElementsByClassName("short-description")[0].innerText;
	var description = card.getElementsByClassName("description")[0].innerText;

	modal.getElementsByTagName("img")[0].src = photo;
	modal.getElementsByClassName("name-inline")[0].innerText = name;
	modal.getElementsByClassName("short-description")[0].innerText = shortDescription;
	modal.getElementsByClassName("description")[0].innerText = description;
	
	modal.style.display = "block";
}

function closeModal() {
	modal.style.display = "none";
}

//To close the modal when clicked outside the modal
window.onclick = function(event) {
	if (event.target == modal) {
		closeModal();
	}
	
	var infoModal = document.getElementById('info-modal');
	if (event.target == infoModal) {
		closeInfoModal();
	}
}w*/