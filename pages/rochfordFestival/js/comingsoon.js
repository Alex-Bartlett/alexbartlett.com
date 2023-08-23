
const onSale = "LIMITED EARLY BIRD TICKETS ON SALE NOW";
const comingSoon = "LIMITED EARLY BIRD TICKETS ON SALE MONDAY";
const saleDate = new Date("2023-06-05 12:00:00");

const promo = document.getElementById("promo");

function UpdatePromo() {
	if (Date.now() > saleDate) {
		promo.innerHTML = onSale;
	}
	else {
		promo.innerHTML = comingSoon;
	}
}

UpdatePromo();