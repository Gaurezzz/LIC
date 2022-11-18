import KEYS from "../js/Keys.js"
const $d=document;
const $planes=$d.getElementById("planes");
const $template=$d.getElementById("plan-template").content;
const $fragment=$d.createDocumentFragment();
const options= { headers: {Authorization: `Bearer ${KEYS.secret}`}}
const FormatoMoneda= num => `$${num.slice(0,-2)}.${num.slice(-2)}`;
let products, prices;

Promise.all([
	fetch("https://api.stripe.com/v1/products", options),
	fetch("https://api.stripe.com/v1/prices", options)
])
.then(responses => Promise.all(responses.map(res=> res.json())))
.then(json=> {
	products=json[0].data;
	prices=json[1].data;

	prices.forEach(el => {
        let productData=products.filter(product=> product.id === el.product);

        $template.querySelector(".plan").setAttribute("data-price", el.id);
        $template.querySelector("img").src =productData[0].images[0];
        $template.querySelector("img").alt =productData[0].name;
        $template.querySelector("figcaption").innerHTML=`${productData[0].name} ${FormatoMoneda(el.unit_amount_decimal)} ${el.currency}`;
	     
	    let $clone= $d.importNode($template, true);

	    $fragment.appendChild($clone);

	});

	$planes.appendChild($fragment);
})

.catch(error => {
	let message=error.statuText || "Ocurrió un error en la petición";

	$planes.innerHTML= `Error: ${error.status}: ${message}`;
})

$d.addEventListener("click", e => {
	if(e.target.matches(".planes *")){
		let priceId=e.target.parentElement.getAttribute("data-price");
	Stripe(KEYS.public).redirectToCheckout({
		lineItems: [{
			price: priceId,
			quantity:1
		}],
		mode:"payment",
		successUrl:"http://127.0.0.1:5500/Confirmacion.html",
		cancelUrl:"http://127.0.0.1:5500/Fracaso.html"
	})
	.then (res=> {
		if(res.error){
			$planes.insertAdjacentElement("afterend",res.error.message)
		}
	})
	}
})