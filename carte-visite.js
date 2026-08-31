document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.bc-download-btn');
    if (!buttons.length) return;

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            downloadAsset(button);
        });
    });
});

async function downloadAsset(button) {
    const cardId = button.getAttribute('data-card');
    const card = document.getElementById(cardId);
    if (!card || typeof html2canvas === 'undefined') return;

    const wrap = card.closest('.bc-card-wrap');
    const isSticker = cardId === 'bc-sticker';
    const filename = isSticker
        ? 'sticker-spaceman.png'
        : 'carte-visite-' + (cardId === 'bc-recto' ? 'recto' : 'verso') + '.png';

    button.disabled = true;

    try {
        wrap.classList.add('is-capturing');

        const canvas = await html2canvas(card, {
            scale: 4,
            useCORS: true,
            allowTaint: true,
            backgroundColor: isSticker ? null : (card.classList.contains('bc-back') ? '#ffffff' : null),
            logging: false
        });

        const output = isSticker ? clipToCircle(canvas) : canvas;

        const link = document.createElement('a');
        link.download = filename;
        link.href = output.toDataURL('image/png');
        link.click();
    } catch (error) {
        console.error('Erreur export PNG:', error);
        alert('Impossible de générer le PNG. Réessayez depuis un serveur local (Live Server).');
    } finally {
        wrap.classList.remove('is-capturing');
        button.disabled = false;
    }
}

function clipToCircle(source) {
    const size = Math.min(source.width, source.height);
    const output = document.createElement('canvas');
    output.width = size;
    output.height = size;

    const ctx = output.getContext('2d');
    ctx.clearRect(0, 0, size, size);
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    const offsetX = (size - source.width) / 2;
    const offsetY = (size - source.height) / 2;
    ctx.drawImage(source, offsetX, offsetY);

    return output;
}
