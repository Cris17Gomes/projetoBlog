const whatsappButton = document.querySelector('.whatsapp-button');

whatsappButton.addEventListener('click', () => {
    const phoneNumber = '55 11 985508341';
    const message = 'Olá, gostaria de fazer um pedido.';
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    // window.location.href = whatsappURL;
});


const instagramButton = document.querySelector('.instagram-button');

instagramButton.addEventListener('click', () => {
    redirectToInstagram();
});

function redirectToInstagram() {
    const instagramURL = 'https://www.instagram.com/cristiano.gomes17/';
    window.open(instagramURL, '_blank');
// window.open(instagramURL, '_blank');
}
