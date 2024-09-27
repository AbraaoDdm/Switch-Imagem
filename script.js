function mudarImage(img){
    let body = document.body;

    switch(img){
        case 'leao':body.style.backgroundImage = "url('leao.jpg')";break;
        case 'tigre':body.style.backgroundImage = "url('tigre.jpg')";break;
        case 'plutao':body.style.backgroundImage = "url('plutao.jpg')";break;
        case 'casa':body.style.backgroundImage = "url('house.jpg')";break;
        case 'morte':body.style.backgroundImage = "url('amostradinho.jpg')";break;
    }
}
