const QRCode = require('qrcode');
const sharp = require('sharp');

const CARTE_URL = 'https://spaceman-dev86.github.io/Portfolio-R-mi-SARRO/carte.html';
const OUT = 'images/qr-remi-sarro.png';
const W = 2400;
const QR_SIZE = 1700;
const PAD = 80;
const FRAME_X = (W - QR_SIZE - PAD * 2) / 2;
const FRAME_Y = 120;
const FRAME_SIZE = QR_SIZE + PAD * 2;
const TEXT_Y = FRAME_Y + FRAME_SIZE + 220;

async function main() {
    const qrDataUrl = await QRCode.toDataURL(CARTE_URL, {
        width: QR_SIZE,
        margin: 0,
        color: { dark: '#012665', light: '#ffffff' },
        errorCorrectionLevel: 'M'
    });

    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="2200" viewBox="0 0 ${W} 2200" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="2200" fill="#ffffff"/>
  <rect x="${FRAME_X}" y="${FRAME_Y}" width="${FRAME_SIZE}" height="${FRAME_SIZE}" rx="48" fill="#ffffff" stroke="#e3e8ef" stroke-width="6"/>
  <image x="${FRAME_X + PAD}" y="${FRAME_Y + PAD}" width="${QR_SIZE}" height="${QR_SIZE}" href="${qrDataUrl}"/>
  <text x="${W / 2}" y="${TEXT_Y}" text-anchor="middle" font-family="Montserrat, Segoe UI, Arial, sans-serif" font-size="200" font-weight="700" fill="#012665">Rémi Sarro</text>
</svg>`;

    await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(OUT);
    console.log('Created', OUT);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
