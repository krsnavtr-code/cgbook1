import { useEffect, useState, useCallback, useMemo } from "react";
import { getImageUrl, getUploadedImages } from "../api/imageApi";
import { getMediaTags } from "../api/mediaTagApi";
import { getOwnerInfo } from "../api/ownerInfoApi";
import {
  FiRefreshCw,
  FiX,
  FiMaximize2,
  FiPhone,
  FiMessageCircle,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import MetaTags from "../components/MetaTags";

const PhotoGallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(12); // Lower initial count for faster First Contentful Paint
  const [ownerInfo, setOwnerInfo] = useState(null);

  // Helper: Memoized Hash function to prevent re-calculation on every render
  const generateConsistentCode = useCallback((url) => {
    const filename = url?.split("/").pop() || "";
    let hash = 0;
    for (let i = 0; i < filename.length; i++) {
      hash = (hash << 5) - hash + filename.charCodeAt(i);
      hash |= 0;
    }
    return String(Math.abs(hash % 100000)).padStart(5, "0");
  }, []);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      // Parallel Fetching
      const [tagsResponse, allMediaResponse] = await Promise.all([
        getMediaTags(),
        getUploadedImages(),
      ]);

      const tags = Array.isArray(tagsResponse)
        ? tagsResponse
        : tagsResponse?.data?.tags || [];
      const photosPageTag = tags.find((tag) => tag?.slug === "photos-page");

      if (!photosPageTag?.mediaFiles?.length) {
        setImages([]);
        return;
      }

      const allMedia = Array.isArray(allMediaResponse)
        ? allMediaResponse
        : allMediaResponse.data || [];

      // Efficient Filtering
      const tagSet = new Set(photosPageTag.mediaFiles);
      const imageData = allMedia
        .filter((media) => {
          const fileName =
            media.url?.split("/").pop() || media.filename || media.name;
          return [...tagSet].some((tagUrl) => tagUrl.includes(fileName));
        })
        .map((media) => {
          const url = media.url || getImageUrl(media.name || media.filename);
          return {
            ...media,
            id: media._id || media.id,
            url,
            code: generateConsistentCode(url),
          };
        });

      setImages(imageData);
    } catch (error) {
      console.error("Gallery Load Error:", error);
    } finally {
      setIsLoading(false);
    }
  }, [generateConsistentCode]);

  useEffect(() => {
    fetchData();
    getOwnerInfo().then(setOwnerInfo).catch(console.error);
  }, [fetchData]);

  // --- Optimization: Intersection Observer for Infinite Scroll ---
  // This is faster than a "Load More" button as it triggers before the user reaches the bottom
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <MetaTags
        title="HD Photo Gallery | FunwithJuli Premium Escorts"
        description="Browse our exclusive HD photo gallery featuring premium escorts in Delhi NCR. Verified profiles with professional photography."
        keywords="escort photo gallery, call girl photos, verified escort photos, premium escort gallery"

      />
      <div className="min-h-screen bg-white">
        <header className="relative py-12 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-6">
                HD{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-500">
                  Photo Gallery
                </span>
              </h1>

              <p className="text-black  text-xl max-w-2xl mx-auto font-light leading-relaxed">
                A curated visual journey through our premium collections and
                exclusive captures.
              </p>
            </motion.div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 pb-32">
          {isLoading ? (
            <SkeletonGrid />
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {images.slice(0, displayCount).map((item, index) => (
                <motion.div
                  key={item.id}
                  layoutId={item.id}
                  className="relative group break-inside-avoid rounded-3xl overflow-hidden cursor-zoom-in bg-gray-100"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.url}
                    alt="Gallery item"
                    loading="lazy" // Native Lazy Loading
                    decoding="async" // Non-blocking image decoding
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay & Buttons */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-bold rounded-lg">
                    #{item.code}
                  </div>

                  {/* Hover Overlay */}

                  <div className="absolute inset-0 bg-black/20 transition-opacity duration-300">
                    <div className="absolute top-3 right-3 flex flex-col gap-2 z-20">
                      {/* Call Button */}

                      {ownerInfo?.owners?.[0]?.callNumber && (
                        <motion.a
                          href={`tel:${ownerInfo.owners[0].callNumber}`}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors shadow-lg z-20"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiPhone size={16} />
                        </motion.a>
                      )}

                      {/* Chat Button */}

                      {ownerInfo?.owners?.[0]?.whatsappNumber && (
                        <motion.a
                          href={`https://wa.me/${ownerInfo.owners[0].whatsappNumber.replace(/[^0-9]/g, "")}?text=Hi! I'm interested in image code: ${item.code}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors shadow-lg z-20"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiMessageCircle size={16} />
                        </motion.a>
                      )}
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white">
                        <FiMaximize2 size={24} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {!isLoading && displayCount < images.length && (
            <button
              onClick={() => setDisplayCount((prev) => prev + 20)}
              className="mt-12 mx-auto block px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-pink-600 transition-colors"
            >
              Show More Models
            </button>
          )}
        </main>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button */}

              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-8 right-8 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-[110]"
                onClick={() => setSelectedImage(null)}
              >
                <FiX size={28} />
              </motion.button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative max-w-7xl w-full max-h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.url}
                  alt="Full preview"
                  className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

const SkeletonGrid = () => (
  <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="w-full bg-gray-200 rounded-3xl animate-pulse h-64"
      />
    ))}
  </div>
);

export default PhotoGallery;
