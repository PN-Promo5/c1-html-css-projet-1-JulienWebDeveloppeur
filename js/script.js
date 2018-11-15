// Je declare toute les sections
let header = document.getElementById("header-index");
let panier = document.getElementById("header-panier");
let bestSell = document.getElementById("best-sell");
let concept = document.getElementById("concept");
let avantages = document.getElementById("avantages");
let socialNetwork = document.getElementById("social-network");
let footer = document.getElementById("footer");
let eltInfoBuy = document.getElementById("info-buy");
let eltBtnPayed= document.getElementById("btn-payed");
eltBtnPayed.style.display = "none";
let eltBannerNutri20 = document.getElementById("nutri-20");
eltBannerNutri20.style.display = "block";
let eltBannerNutri30 = document.getElementById("nutri-30");
eltBannerNutri30.style.display = "none";
eltInfoBuy.style.display = "none";
function clignote() {
if (eltBannerNutri20.style.display === "block") {
setTimeout(function(){ 
eltBannerNutri20.style.display = "none";
eltBannerNutri30.style.display = "block";
}, 10000);
setTimeout(function(){ 
eltBannerNutri30.style.display = "none";
eltBannerNutri20.style.display = "block";
}, 20000);
}
}

scheduler = function(maxIterations, interval) {
    var iteration = function(n){
        if (n > 0) {
            clignote();
            setTimeout(function(){iteration(n-1)},interval);
        }
    }
    iteration(maxIterations);
}


scheduler(999999999999999999999999, 1000);
 

// Je declare le bouton qui mene au panier et j'initialie la section panier en hidden
let goPanier = document.getElementById("go-panier");
let eltBtnGoBack = document.getElementById("go-back");
let eltLogoGoBack = document.getElementById("logo-back");
let eltHomeGoBack = document.getElementById("home-back");
panier.hidden = true;
// Je declare ma phrase panier vide
let panierVide = document.getElementById("panier-vide");
// Je declare le nombre d'article dans mon panier qui apparait en html
let nbrArticlePanier = document.getElementById("nbr-article-panier");

// Je declare mes 3 boutons d'ajouts au panier
let ajouterArticle1 = document.getElementById("ajouter-article1");
let ajouterArticle2 = document.getElementById("ajouter-article2");
let ajouterArticle3 = document.getElementById("ajouter-article3");
// Je declare ma box article 1 que j'initialise en display none
let article1 = document.getElementById("article1");
article1.style.display = "none";
// Je declare ma box article 2 que j'initialise en display none
let article2 = document.getElementById("article2");
article2.style.display = "none";
// Je declare ma box article 3 que j'initialise en display none
let article3 = document.getElementById("article3");
article3.style.display = "none";
// Je stock dans une variable le nbr d'article ajouter au panier total et de chaque article que j'ajoute a mon contenue html
let nbrArticlePanierAjouter = 0;
let article1Nbr = 0;
let article2Nbr = 0;
let article3Nbr = 0;
nbrArticlePanier.textContent = nbrArticlePanierAjouter;
let priceArticle1 = 2.79;
let priceArticle2 = 2.50;
let priceArticle3 = 2.29;
let priceTotalArticle1 = 0;
let priceTotalArticle2 = 0;
let priceTotalArticle3 = 0;
let totalPrice = 0;
let tauxTva = 19.6;
let tva = 0;
let deliveryPrice = 0;
let relay = 0;
let relayUse = false;
let ups = 9.99;
let upsUse = false;
let colissimo = 7.99;
let colissimoUse = false;
let eltPriceArticle1 = document.getElementById("price-article1");
eltPriceArticle1.textContent = priceArticle1;
let eltPriceArticle2 = document.getElementById("price-article2");
eltPriceArticle2.textContent = priceArticle2;
let eltPriceArticle3 = document.getElementById("price-article3");
eltPriceArticle3.textContent = priceArticle3;
let eltTva = document.getElementById("tva");
eltTva.textContent = tva + "€";
let eltDelivery = document.getElementById("delivery");
let eltDeliveryPrice = document.getElementById("delivery-price");
eltDeliveryPrice.textContent = 0 + "€";
eltDelivery.addEventListener("click",chooseDelivery,false);
function chooseDelivery() {
if (relayUse == true) {
priceBefore -= deliveryPrice;
}
if (upsUse == true) {
priceBefore -= deliveryPrice;	
}
if (colissimoUse == true) {
priceBefore -= deliveryPrice;	
}
relayUse = false;
upsUse = false;
colissimoUse = false;
	if(eltDelivery.value === "relay") {
		deliveryPrice = relay;
		relayUse = true;
eltDeliveryPrice.textContent = relay + "€";
	} 
	if (eltDelivery.value === "ups") {
		deliveryPrice = ups;
		upsUse = true;
eltDeliveryPrice.textContent = ups + "€";
	} 
	if (eltDelivery.value === "colissimo") {
		deliveryPrice = colissimo;
		colissimoUse = true;
eltDeliveryPrice.textContent = colissimo + "€";
	}
eltPromoReduc.textContent = reduc.toFixed(2) + "€";
priceBefore = priceTotalArticle1 + priceTotalArticle2 + priceTotalArticle3 + deliveryPrice;
tva = priceBefore * tauxTva / 100;
priceBeforeReduc = priceBefore + tva;
totalPrice = priceBeforeReduc - reduc;
eltTva.textContent = tva.toFixed(2) + "€";
eltPriceBeforeReduc.textContent = priceBeforeReduc.toFixed(2)  + "€";
eltTotalPrice.textContent = totalPrice.toFixed(2) + "€";
}
let eltTotalPrice = document.getElementById("total-price");
eltTotalPrice.textContent = totalPrice + "€";

// J'ajoute un ecouteur d'evenement au click sur mon bouton panier qui cache toute les sections de ma page et fait apparaitre la section panier
goPanier.addEventListener("click",allerPanier,false);
function allerPanier() {
bestSell.hidden = true;
concept.hidden = true;
avantages.hidden = true;
socialNetwork.hidden = true;
footer.hidden = true;
header.style.display = "none";
panier.hidden = false;
};
eltBtnGoBack.addEventListener("click",returnSite,false);
eltLogoGoBack.addEventListener("click",returnSite,false);
eltHomeGoBack.addEventListener("click",returnSite,false);
function returnSite() {
bestSell.hidden = false;
concept.hidden = false;
avantages.hidden = false;
socialNetwork.hidden = false;
footer.hidden = false;
header.style.display = "inherit";
panier.hidden = true;
};
// Je declare le bouton delete de mon article 1,2 et 3
let deleteArticle1 = document.getElementById("delete-article1")
let deleteArticle2 = document.getElementById("delete-article2")
let deleteArticle3 = document.getElementById("delete-article3")

// J'ajoute un ecouteur d'evenement au bouton supprimer de l'article  1,2 et 3 qui display none larticle et si ils sont tous cacher affiche le message de panier vide
deleteArticle1.addEventListener("click",delete1,false);
function delete1() {
article1.style.display = "none";
priceTotalArticle1 -= article1Nbr * priceArticle1;
eltPriceArticle1.textContent = priceTotalArticle1.toFixed(2);
nbrArticle1.textContent = article1Nbr;
nbrArticlePanierAjouter = article1Nbr + article2Nbr + article3Nbr ;
nbrArticlePanier.textContent = nbrArticlePanierAjouter;
priceBefore = priceTotalArticle1 + priceTotalArticle2 + priceTotalArticle3 + deliveryPrice;
tva = priceBefore * tauxTva / 100;
priceBeforeReduc = priceBefore + tva;
totalPrice = priceBeforeReduc - reduc;
eltTva.textContent = tva.toFixed(2) + "€";
eltPriceBeforeReduc.textContent = priceBeforeReduc.toFixed(2)  + "€";
eltTotalPrice.textContent = totalPrice.toFixed(2) + "€";
article1Nbr = 0;
if (article1Nbr < 1 && article2Nbr < 1 && article3Nbr < 1) {
eltBtnPayed.style.display = "none";
}
if (article1.style.display === "none" && article2.style.display === "none" && article3.style.display === "none") {
panierVide.hidden = false;
}
};
deleteArticle2.addEventListener("click",delete2,false);
function delete2() {
article2.style.display = "none";
priceTotalArticle2 -= article2Nbr * priceArticle2;
eltPriceArticle2.textContent = priceTotalArticle2.toFixed(2);
nbrArticle2.textContent = article2Nbr;
nbrArticlePanierAjouter = article1Nbr + article2Nbr + article3Nbr ;
nbrArticlePanier.textContent = nbrArticlePanierAjouter;
priceBefore = priceTotalArticle1 + priceTotalArticle2 + priceTotalArticle3 + deliveryPrice;
tva = priceBefore * tauxTva / 100;
priceBeforeReduc = priceBefore + tva;
totalPrice = priceBeforeReduc - reduc;
eltTva.textContent = tva.toFixed(2) + "€";
eltPriceBeforeReduc.textContent = priceBeforeReduc.toFixed(2)  + "€";
eltTotalPrice.textContent = totalPrice.toFixed(2) + "€";
article2Nbr = 0;
	if (article1Nbr < 1 && article2Nbr < 1 && article3Nbr < 1) {
eltBtnPayed.style.display = "none";
}
if (article1.style.display === "none" && article2.style.display === "none" && article3.style.display === "none") {
panierVide.hidden = false;	
}
};
deleteArticle3.addEventListener("click",delete3,false);
function delete3() {
article3.style.display = "none";
priceTotalArticle3 -= article3Nbr * priceArticle3;
eltPriceArticle3.textContent = priceTotalArticle3.toFixed(2);
nbrArticle3.textContent = article3Nbr;
nbrArticlePanierAjouter = article1Nbr + article2Nbr + article3Nbr ;
nbrArticlePanier.textContent = nbrArticlePanierAjouter;
priceBefore = priceTotalArticle1 + priceTotalArticle2 + priceTotalArticle3 + deliveryPrice;
tva = priceBefore * tauxTva / 100;
priceBeforeReduc = priceBefore + tva;
totalPrice = priceBeforeReduc - reduc;
eltTva.textContent = tva.toFixed(2) + "€";
eltPriceBeforeReduc.textContent = priceBeforeReduc.toFixed(2)  + "€";
eltTotalPrice.textContent = totalPrice.toFixed(2) + "€";
article3Nbr = 0;
if (article1Nbr < 1 && article2Nbr < 1 && article3Nbr < 1) {
eltBtnPayed.style.display = "none";
}
if (article1.style.display === "none" && article2.style.display === "none" && article3.style.display === "none") {
panierVide.hidden = false;	
}
};
// Je declare les boutons plus et moin de l'article 1 et le nombre de cette article actuellement dans le panier
let moinArticle1 = document.getElementById("moin-article1");
let plusArticle1 = document.getElementById("plus-article1");
let nbrArticle1 = document.getElementById("nbr-article1");
// J'initialise le nombre d'article 1 dans mon panier a 1
nbrArticle1.textContent = "1";
// Jajoute un ecouteur d'evenement a mon bouton moin de l'article 1 qui si le nombre de l'article est superieur a 1 decremente le nombre d'article 1 et met a jour le nombre dans le panier et dans la box de l'article
moinArticle1.addEventListener("click",decrementeArticle1,false); 
function decrementeArticle1() {
	if (article1Nbr > 1) {
	article1Nbr--;
	} else {
			article1Nbr--;
		article1.style.display = "none";
        if (article1.style.display === "none" && article2.style.display === "none" && article3.style.display === "none") {
panierVide.hidden = false;	
}
if (article1Nbr < 1 && article2Nbr < 1 && article3Nbr < 1) {
eltBtnPayed.style.display = "none";
}
	}
	if (eltReduction.style.display === "flex") {
	reduc = 0;
	nutri20Use = false;
	nutri40Use = false;
    eltReduction.style.display = "none";	
    eltPromoCodeArea.style.display = "flex";
    eltBeforeReduc.style.display = "none";
totalPrice = priceBefore + tva - reduc;
eltTotalPrice.textContent = totalPrice.toFixed(2)+ "€";
}
priceTotalArticle1 -= priceArticle1;
eltPriceArticle1.textContent = priceTotalArticle1.toFixed(2);
nbrArticle1.textContent = article1Nbr;
nbrArticlePanierAjouter = article1Nbr + article2Nbr + article3Nbr ;
nbrArticlePanier.textContent = nbrArticlePanierAjouter;
priceBefore = priceTotalArticle1 + priceTotalArticle2 + priceTotalArticle3 + deliveryPrice;
tva = priceBefore * tauxTva / 100;
priceBeforeReduc = priceBefore + tva;
totalPrice = priceBeforeReduc - reduc;
eltTva.textContent = tva.toFixed(2) + "€";
eltPriceBeforeReduc.textContent = priceBeforeReduc.toFixed(2)  + "€";
eltTotalPrice.textContent = totalPrice.toFixed(2) + "€";
}
plusArticle1.addEventListener("click",incrementeArticle1,false); 
function incrementeArticle1() {
article1Nbr++;
nbrArticle1.textContent = article1Nbr;
nbrArticlePanierAjouter = article1Nbr + article2Nbr + article3Nbr ;
nbrArticlePanier.textContent = nbrArticlePanierAjouter;
priceTotalArticle1 += priceArticle1;
eltPriceArticle1.textContent = priceTotalArticle1.toFixed(2);
priceBefore = priceTotalArticle1 + priceTotalArticle2 + priceTotalArticle3 + deliveryPrice;
tva = priceBefore * tauxTva / 100;
priceBeforeReduc = priceBefore + tva;
totalPrice = priceBeforeReduc - reduc;
eltTva.textContent = tva.toFixed(2) + "€";
eltPriceBeforeReduc.textContent = priceBeforeReduc.toFixed(2)  + "€";
eltTotalPrice.textContent = totalPrice.toFixed(2) + "€";
}
// Je declare les boutons plus et moin de l'article 2 et le nombre de cette article actuellement dans le panier
let moinArticle2 = document.getElementById("moin-article2");
let plusArticle2 = document.getElementById("plus-article2");
let nbrArticle2 = document.getElementById("nbr-article2");
// J'initialise le nombre d'article 2 dans mon panier a 1
nbrArticle2.textContent = "1";
// Jajoute un ecouteur d'evenement a mon bouton moin de l'article 2 qui si le nombre de l'article est superieur a 1 decremente le nombre d'article 2 et met a jour le nombre dans le panier et dans la box de l'article
moinArticle2.addEventListener("click",decrementeArticle2,false); 
function decrementeArticle2() {
	if (article2Nbr > 1) {
	article2Nbr--;
	} else {
	    article2Nbr--;
		article2.style.display = "none";
        if (article1.style.display === "none" && article2.style.display === "none" && article3.style.display === "none") {
panierVide.hidden = false;	
}
}
if (article1Nbr < 1 && article2Nbr < 1 && article3Nbr < 1) {
eltBtnPayed.style.display = "none";
}
	if (eltReduction.style.display === "flex") {
	reduc = 0;
	nutri20Use = false;
	nutri40Use = false;
    eltReduction.style.display = "none";	
    eltPromoCodeArea.style.display = "flex";
    eltBeforeReduc.style.display = "none";
totalPrice = priceBefore + tva - reduc;
eltTotalPrice.textContent = totalPrice.toFixed(2)+ "€";
}
priceTotalArticle2 -= priceArticle2;
eltPriceArticle2.textContent = priceTotalArticle2.toFixed(2);
nbrArticle2.textContent = article2Nbr;
nbrArticlePanierAjouter = article1Nbr + article2Nbr + article3Nbr ;
nbrArticlePanier.textContent = nbrArticlePanierAjouter;
priceBefore = priceTotalArticle1 + priceTotalArticle2 + priceTotalArticle3 + deliveryPrice;
tva = priceBefore * tauxTva / 100;
priceBeforeReduc = priceBefore + tva;
totalPrice = priceBeforeReduc - reduc;
eltTva.textContent = tva.toFixed(2) + "€";
eltPriceBeforeReduc.textContent = priceBeforeReduc.toFixed(2)  + "€";
eltTotalPrice.textContent = totalPrice.toFixed(2) + "€";
}
plusArticle2.addEventListener("click",incrementeArticle2,false); 
function incrementeArticle2() {
article2Nbr++
nbrArticle2.textContent = article2Nbr;
nbrArticlePanierAjouter = article1Nbr + article2Nbr + article3Nbr ;
nbrArticlePanier.textContent = nbrArticlePanierAjouter;
priceTotalArticle2 += priceArticle2;
eltPriceArticle2.textContent = priceTotalArticle2.toFixed(2);
priceBefore = priceTotalArticle1 + priceTotalArticle2 + priceTotalArticle3 + deliveryPrice;
tva = priceBefore * tauxTva / 100;
priceBeforeReduc = priceBefore + tva;
totalPrice = priceBeforeReduc - reduc;
eltTva.textContent = tva.toFixed(2) + "€";
eltPriceBeforeReduc.textContent = priceBeforeReduc.toFixed(2)  + "€";
eltTotalPrice.textContent = totalPrice.toFixed(2) + "€";
}
// Je declare les boutons plus et moin de l'article 3 et le nombre de cette article actuellement dans le panier
let moinArticle3 = document.getElementById("moin-article3");
let plusArticle3 = document.getElementById("plus-article3");
let nbrArticle3 = document.getElementById("nbr-article3");
// J'initialise le nombre d'article 3 dans mon panier a 1
nbrArticle3.textContent = "1";
// Jajoute un ecouteur d'evenement a mon bouton moin de l'article 3 qui si le nombre de l'article est superieur a 1 decremente le nombre d'article 3 et met a jour le nombre dans le panier et dans la box de l'article
moinArticle3.addEventListener("click",decrementeArticle3,false); 
function decrementeArticle3() {
	if (article3Nbr > 1) {
	  article3Nbr--;
	} else {
		article3Nbr--;
		article3.style.display = "none";
        if (article1.style.display === "none" && article2.style.display === "none" && article3.style.display === "none") {
panierVide.hidden = false;	
}
}
if (article1Nbr < 1 && article2Nbr < 1 && article3Nbr < 1) {
eltBtnPayed.style.display = "none";
}
	if (eltReduction.style.display === "flex") {
	reduc = 0;
	nutri20Use = false;
	nutri40Use = false;
    eltReduction.style.display = "none";	
    eltPromoCodeArea.style.display = "flex";
    eltBeforeReduc.style.display = "none";
totalPrice = priceBefore + tva - reduc;
eltTotalPrice.textContent = totalPrice.toFixed(2)+ "€";
}
priceTotalArticle3 -= priceArticle3;
eltPriceArticle3.textContent = priceTotalArticle3.toFixed(2);
nbrArticle3.textContent = article3Nbr;
nbrArticlePanierAjouter = article1Nbr + article2Nbr + article3Nbr ;
nbrArticlePanier.textContent = nbrArticlePanierAjouter;
priceBefore = priceTotalArticle1 + priceTotalArticle2 + priceTotalArticle3 + deliveryPrice;
tva = priceBefore * tauxTva / 100;
priceBeforeReduc = priceBefore + tva;
totalPrice = priceBeforeReduc - reduc;
eltTva.textContent = tva.toFixed(2) + "€";
eltPriceBeforeReduc.textContent = priceBeforeReduc.toFixed(2)  + "€";
eltTotalPrice.textContent = totalPrice.toFixed(2) + "€";
}
plusArticle3.addEventListener("click",incrementeArticle3,false); 
function incrementeArticle3() {
article3Nbr++
nbrArticle3.textContent = article3Nbr;
nbrArticlePanierAjouter = article1Nbr + article2Nbr + article3Nbr ;
nbrArticlePanier.textContent = nbrArticlePanierAjouter;
priceTotalArticle3 += priceArticle3;
eltPriceArticle3.textContent = priceTotalArticle3.toFixed(2);
priceBefore = priceTotalArticle1 + priceTotalArticle2 + priceTotalArticle3 + deliveryPrice;
tva = priceBefore * tauxTva / 100;
priceBeforeReduc = priceBefore + tva;
totalPrice = priceBeforeReduc - reduc;
eltTva.textContent = tva.toFixed(2) + "€";
eltPriceBeforeReduc.textContent = priceBeforeReduc.toFixed(2)  + "€";
eltTotalPrice.textContent = totalPrice.toFixed(2) + "€";
}
// J'ajoute un ecouteur d'evenement au click sur l'article 1,2 et 3 et lui ajoute une fonctions qui incremente de 1 a chaque click le nombre d'article 1 et le fait apparaitre dans la section.
ajouterArticle1.addEventListener("click",function(){
	ajouterPanierArticle(1)},false);
ajouterArticle2.addEventListener("click",function(){
	ajouterPanierArticle(2)},false);
ajouterArticle3.addEventListener("click",function(){
	ajouterPanierArticle(3)},false);
function ajouterPanierArticle(article) {
	this.article = article;
if (this.article === 1) {
article1Nbr++;
nbrArticle1.textContent = article1Nbr;
nbrArticlePanierAjouter = article1Nbr + article2Nbr + article3Nbr;
eltInfoBuy.style.display = "flex";
panierVide.hidden = true;
article1.style.display = "flex";	
eltBtnPayed.style.display = "inherit";
nbrArticlePanier.textContent = nbrArticlePanierAjouter;
priceTotalArticle1 += priceArticle1;
eltPriceArticle1.textContent = priceTotalArticle1.toFixed(2);
}
if (this.article === 2) {
article2Nbr++;
nbrArticle2.textContent = article2Nbr;
nbrArticlePanierAjouter = article1Nbr + article2Nbr + article3Nbr;
panierVide.hidden = true;
eltInfoBuy.style.display = "flex";
article2.style.display = "flex";	
eltBtnPayed.style.display = "inherit";
nbrArticlePanier.textContent = nbrArticlePanierAjouter;
priceTotalArticle2 += priceArticle2;
eltPriceArticle2.textContent = priceTotalArticle2.toFixed(2);
}
if (this.article === 3) {
article3Nbr++;
nbrArticle3.textContent = article3Nbr;
nbrArticlePanierAjouter = article1Nbr + article2Nbr + article3Nbr;
panierVide.hidden = true;
eltInfoBuy.style.display = "flex";
article3.style.display = "flex";	
eltBtnPayed.style.display = "inherit";
nbrArticlePanier.textContent = nbrArticlePanierAjouter;
priceTotalArticle3 += priceArticle3;
eltPriceArticle3.textContent = priceTotalArticle3.toFixed(2);
}
priceBefore = priceTotalArticle1 + priceTotalArticle2 + priceTotalArticle3;
tva = priceBefore * tauxTva / 100;
priceBeforeReduc = priceBefore;
totalPrice = priceBefore + tva - reduc;
eltTva.textContent = tva.toFixed(2) + "€";
eltTotalPrice.textContent = totalPrice.toFixed(2) + "€";
}

var nutri20Use = false;
var nutri40Use = false;
var reduc = 0;
var priceBeforeReduc = 0;
var priceBefore = 0;
let eltBeforeReduc = document.getElementById("before-reduc");
eltBeforeReduc.style.display = "none";
let eltPriceBeforeReduc = document.getElementById("price-before");
let eltPromoCodeArea = document.getElementById("code-promo-area");
let promoCode = document.getElementById("promo-code");
let eltDeletePromoCode = document.getElementById("delete-promo-code");
let eltPromoReduc = document.getElementById("promo-reduc");
let eltReduction = document.getElementById("reduction");
let eltReductionMsg = document.getElementById("msg-reduction");
eltReduction.style.display = "none";
let btnPromo = document.getElementById("promo-test");
btnPromo.addEventListener("click",reduction,false);
function reduction() {
if (promoCode.value === "NUTRI20" && nutri20Use === false && priceBeforeReduc >= 35) {
	promo(20);
	nutri20Use = true;
	nutri40Use = false;
	eltBeforeReduc.style.display = "flex";
    eltReduction.style.display = "flex";
    eltPromoCodeArea.style.display = "none";
    eltReductionMsg.textContent = "Vous obtenez 20% de reduction !";
}
if (promoCode.value === "NUTRI40" &&  nutri40Use === false && priceBeforeReduc>= 75) {
	promo(30);
	nutri40Use = true;
    nutri20Use = false;
	eltBeforeReduc.style.display = "flex";
    eltReduction.style.display = "flex";
    eltPromoCodeArea.style.display = "none";
    eltReductionMsg.textContent = "Vous obtenez 30% de reduction !";
}
tva = priceBefore * tauxTva / 100;
priceBeforeReduc = priceBefore + tva;
totalPrice = priceBeforeReduc - reduc;
eltTva.textContent = tva.toFixed(2) + "€";
eltPriceBeforeReduc.textContent = priceBeforeReduc.toFixed(2)  + "€";
eltTotalPrice.textContent = totalPrice.toFixed(2)+ "€";
eltPromoReduc.textContent = reduc.toFixed(2) + "€";
}

function promo(pourcentage) {
reduc =0;
	this.pourcentage = pourcentage;
reduc = priceBefore * this.pourcentage / 100;
//totalPrice -= reduc;
return reduc;
}

eltDeletePromoCode.addEventListener("click",function() {
if (eltReduction.style.display === "flex") {
	reduc = 0;
	nutri20Use = false;
	nutri40Use = false;
    eltReduction.style.display = "none";	
    eltPromoCodeArea.style.display = "flex";
totalPrice = priceBefore + tva - reduc;
eltPriceBeforeReduc.textContent = priceBeforeReduc.toFixed(2)  + "€";
eltTotalPrice.textContent = totalPrice.toFixed(2)+ "€";
}
},false);

