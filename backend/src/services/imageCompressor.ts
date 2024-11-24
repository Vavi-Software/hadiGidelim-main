import Compressor from "compressorjs";

/**
 * Bir resmi sıkıştırır ve bir File nesnesi olarak döndürür.
 * @param file Sıkıştırılacak resim dosyası.
 * @returns Sıkıştırılmış File nesnesi.
 */
const compressImage = (file: File): Promise<File> => {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      quality: 0.6, // Sıkıştırma kalitesi (0-1 arasında)
      success(result) {
        if (result instanceof Blob) {
          const compressedFile = new File([result], file.name, {
            type: result.type,
            lastModified: Date.now(),
          });
          resolve(compressedFile);
        } else {
          reject(new Error("Beklenmeyen sonuç tipi: Sıkıştırılmış dosya bir Blob değil."));
        }
      },
      error(err) {
        reject(err);
      },
    });
  });
};

export default compressImage;
