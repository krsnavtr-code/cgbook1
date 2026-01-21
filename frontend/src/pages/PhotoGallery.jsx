import { useEffect, useState } from "react";
import { getUploadedImages, getImageUrl } from "../api/imageApi";
import { FiMaximize2, FiRefreshCw, FiX, FiDownload } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const PhotoGallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchImages = async () => {
    try {
      setIsLoading(true);
      const response = await getUploadedImages();
      const imageData = (response.data || [])
        .filter(
          (item) =>
            item.type === "image" || item.mimetype?.startsWith("image/"),
        )
        .map((item) => ({
          ...item,
          url: item.url || getImageUrl(item.name || item.filename),
          thumbnailUrl:
            item.thumbnailUrl ||
            item.url ||
            getImageUrl(item.name || item.filename),
        }));
      setImages(imageData);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="inline-block p-4 rounded-full bg-pink-50 dark:bg-pink-900/20 mb-4"
          >
            <FiRefreshCw className="h-10 w-10 text-pink-600" />
          </motion.div>
          <p className="text-gray-500 dark:text-gray-400 font-bold animate-pulse">
            Curating your gallery...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* --- HEADER --- */}
      <div className="relative py-20 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-pink-500/10 to-transparent blur-3xl opacity-50"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6"
          >
            HD{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-600">
              Photo Gallery
            </span>
          </motion.h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            Explore high-quality visual stories and exclusive captures from our
            premium collection.
          </p>
        </div>
      </div>

      {/* --- MASONRY GRID --- */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((item, index) => (
            <motion.div
              key={item.id || item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative group break-inside-avoid rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-900 shadow-xl border border-gray-100 dark:border-gray-800"
            >
              <img
                src={item.thumbnailUrl}
                alt={item.name || "Gallery Photo"}
                className="w-full h-auto object-cover transition-transform duration-700 cursor-pointer"
                onClick={() => setSelectedImage(item)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- LIGHTBOX (Selected Image) --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            {/* Lightbox Controls */}
            <div className="absolute top-6 right-6 flex gap-4 z-[110]">
              <button
                className="p-4 bg-pink-600 hover:bg-pink-700 rounded-2xl text-white transition-all shadow-lg shadow-pink-600/20"
                onClick={() => setSelectedImage(null)}
              >
                <FiX size={24} />
              </button>
            </div>

            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt="Full View"
                className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGallery;
