const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Create circular favicon from the existing logo
async function createCircularFavicon() {
  try {
    const inputPath = path.join(__dirname, 'public', 'img', 'img11.1.png');
    const outputPath = path.join(__dirname, 'public', 'favicon.ico');
    
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.error('Input logo file not found:', inputPath);
      return;
    }
    
    // Resize and make circular
    const size = 64;
    const radius = size / 2;
    
    // Create a circular mask
    const mask = Buffer.from(
      Array.from({ length: size * size }, (_, i) => {
        const x = (i % size) - radius;
        const y = Math.floor(i / size) - radius;
        return x * x + y * y <= radius * radius ? 255 : 0;
      })
    );
    
    // Process the image
    const circularImage = await sharp(inputPath)
      .resize(size, size)
      .composite([{
        input: {
          create: {
            width: size,
            height: size,
            channels: 4,
            background: { r: 0, g: 0, b: 0, alpha: 0 }
          }
        },
        blend: 'dest-in',
        input: mask,
        raw: {
          width: size,
          height: size,
          channels: 1
        }
      }])
      .png()
      .toBuffer();
    
    // Save as favicon.ico
    await sharp(circularImage)
      .resize(32, 32)
      .toFile(outputPath);
    
    console.log('Circular favicon created successfully at:', outputPath);
  } catch (error) {
    console.error('Error creating circular favicon:', error);
  }
}

createCircularFavicon();