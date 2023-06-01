const whatsappButton = document.querySelector('.whatsapp-button');

whatsappButton.addEventListener('click', () => {
    const phoneNumber = '55 11 985508341';
    const message = 'Olá, gostaria de fazer um pedido.';
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.location.href = whatsappURL;
});

