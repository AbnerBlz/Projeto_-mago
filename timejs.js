let currentImageIndex = 1;

function changeContent(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 1) {
        currentImageIndex = 4; // Ajuste conforme o número de imagens que você tem
    } else if (currentImageIndex > 4) {
        currentImageIndex = 1;
    }

    const imagePath = `C:\Users\Abner\Documents\Codes\Sinch_Hive_Mind${currentImageIndex}.jpg`;
    const textContainer = document.querySelector('.text-container');
    const titleElement = textContainer.querySelector('h1');
    const paragraphElement = textContainer.querySelector('p');

    titleElement.textContent = `Título da Imagem ${currentImageIndex}`;
    paragraphElement.textContent = `Algum texto descritivo para a imagem ${currentImageIndex}.`;

    const imageElement = document.querySelector('.container img');
    imageElement.src = imagePath;
}
