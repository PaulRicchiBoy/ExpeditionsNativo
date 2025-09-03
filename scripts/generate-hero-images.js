import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Configuración de paths para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuración
const inputImage = path.join(__dirname, '../public/images/PORTADA.jpg');
const outputDir = path.join(__dirname, '../public/images/hero');

// Tamaños y calidades
const sizes = [
  { name: 'xl', width: 2560, quality: 80 },
  { name: 'lg', width: 1920, quality: 75 },
  { name: 'md', width: 1280, quality: 70 },
  { name: 'sm', width: 640, quality: 65 }
];

async function generateHeroImages() {
  try {
    // Crear directorio si no existe
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
      console.log(`📁 Carpeta creada: ${outputDir}`);
    }

    // Procesar cada tamaño
    for (const size of sizes) {
      const baseName = `hero-${size.name}`;
      
      // Generar WebP
      await sharp(inputImage)
        .resize(size.width)
        .webp({ quality: size.quality })
        .toFile(path.join(outputDir, `${baseName}.webp`));
      
      // Generar JPG (fallback)
      await sharp(inputImage)
        .resize(size.width)
        .jpeg({ 
          quality: size.quality,
          mozjpeg: true 
        })
        .toFile(path.join(outputDir, `${baseName}.jpg`));
      
      console.log(`✅ Generadas: ${baseName}.webp y ${baseName}.jpg`);
    }

    console.log('🎉 Todas las imágenes hero fueron generadas correctamente');
  } catch (error) {
    console.error('❌ Error al generar imágenes:', error);
  }
}

// Ejecutar
generateHeroImages();