import { useEffect, useState, useCallback, useMemo } from "react";
import {
  getUploadedImages,
  getImageUrl,
  deleteMediaFile,
  checkMediaUsage,
  renameMediaFile,
} from "../../api/imageApi";
import {
  getMediaTags,
  updateMediaTag,
  updateMediaTags,
} from "../../api/mediaTagApi";
import { toast } from "react-hot-toast";
import {
  FiCopy,
  FiRefreshCw,
  FiUpload,
  FiTrash2,
  FiSearch,
  FiCheckSquare,
  FiSquare,
  FiX,
  FiDownload,
  FiExternalLink,
  FiFolder,
  FiTag,
  FiTag as FiTagIcon,
  FiEdit,
} from "react-icons/fi";
import {
  FaPlay,
  FaImage,
  FaFilm,
  FaTimes,
  FaCheckCircle,
  FaTags,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ImageGallery = () => {
  const [media, setMedia] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [mediaInUse, setMediaInUse] = useState({});

  // Tag Management
  const [tags, setTags] = useState([]);
  const [showTagModal, setShowTagModal] = useState(false);
  const [selectedTagIds, setSelectedTagIds] = useState(new Set());
  const [isUpdatingTags, setIsUpdatingTags] = useState(false);

  // View Modes - Fixed to list only
  const viewMode = "list";

  // Rename Management
  const [renamingItem, setRenamingItem] = useState(null);
  const [newFilename, setNewFilename] = useState("");
  const [isRenaming, setIsRenaming] = useState(false);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  // --- Logic: Check Media Usage ---
  const checkMediaItemUsage = async (filename) => {
    try {
      const usageCheck = await checkMediaUsage(getImageUrl(filename));
      return usageCheck.data.isUsed;
    } catch (error) {
      // console.error("Error checking media usage:", error);
      return false;
    }
  };

  const checkAllMediaUsage = async (mediaItems) => {
    const usageMap = {};
    // Check in batches or parallel to speed up
    await Promise.all(
      mediaItems.map(async (item) => {
        const filename = item.name || item.filename;
        usageMap[filename] = await checkMediaItemUsage(filename);
      }),
    );
    setMediaInUse(usageMap);
  };

  // --- Logic: Fetch Media ---
  const fetchMedia = async () => {
    try {
      setIsLoading(true);
      const response = await getUploadedImages();
      if (response && response.data) {
        const mediaWithTypes = response.data.map((item) => ({
          ...item,
          type:
            item.type ||
            (item.mimetype?.startsWith("video/") ? "video" : "image"),
        }));
        setMedia(mediaWithTypes);
        checkAllMediaUsage(mediaWithTypes);
      } else {
        toast.error("Failed to load media: Invalid response format");
      }
    } catch (error) {
      console.error("Error fetching media:", error);
      toast.error("Failed to load media");
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch tags when component mounts
  const fetchTags = useCallback(async () => {
    try {
      const response = await getMediaTags();
      setTags(response.data?.tags || response.data || []);
    } catch (error) {
      console.error("Error fetching tags:", error);
      toast.error("Failed to load tags");
    }
  }, []);

  // Function to match media items with their tags
  const getTagsForMedia = useCallback(
    (mediaUrl) => {
      if (!mediaUrl || !tags || tags.length === 0) return [];
      return tags
        .filter((tag) => tag.mediaFiles && tag.mediaFiles.includes(mediaUrl))
        .map((tag) => ({
          _id: tag._id,
          name: tag.name,
          slug: tag.slug,
        }));
    },
    [tags],
  );

  // Add tags to media items
  const mediaWithTags = useMemo(() => {
    if (!media || media.length === 0) return [];
    return media.map((item) => ({
      ...item,
      tags: getTagsForMedia(item.url || ""),
    }));
  }, [media, getTagsForMedia]);

  // Function to get common tags from selected media items
  const getCommonTagsFromSelectedMedia = useCallback(() => {
    if (selectedItems.size === 0 || !media || media.length === 0)
      return new Set();

    // Get all selected media items
    const selectedMedia = media.filter((item) => selectedItems.has(item.url));

    if (selectedMedia.length === 0) return new Set();

    // Get tags from the first selected item
    const firstItemTags = new Set(
      getTagsForMedia(selectedMedia[0].url || "").map((tag) => tag._id),
    );

    // Find intersection with other selected items' tags
    for (let i = 1; i < selectedMedia.length; i++) {
      const currentItemTags = new Set(
        getTagsForMedia(selectedMedia[i].url || "").map((tag) => tag._id),
      );
      // Keep only tags that exist in both sets
      for (const tagId of firstItemTags) {
        if (!currentItemTags.has(tagId)) {
          firstItemTags.delete(tagId);
        }
      }
    }

    return firstItemTags;
  }, [selectedItems, media, getTagsForMedia]);

  useEffect(() => {
    fetchMedia();
    fetchTags();
  }, [fetchTags]);

  // Handle tag selection toggle
  const toggleTagSelection = (tagId) => {
    setSelectedTagIds((prev) => {
      const newSelection = new Set(prev);
      if (newSelection.has(tagId)) {
        newSelection.delete(tagId);
      } else {
        newSelection.add(tagId);
      }
      return newSelection;
    });
  };

  // Handle saving tags for selected media
  const handleSaveTags = async () => {
    if (selectedItems.size === 0 || selectedTagIds.size === 0) {
      toast.error("Please select media and at least one tag");
      return;
    }
    try {
      setIsUpdatingTags(true);
      const tagIdsArray = Array.from(selectedTagIds);

      // Update each selected media item
      const updatePromises = Array.from(selectedItems).map((mediaUrl) =>
        updateMediaTags(mediaUrl, tagIdsArray),
      );
      await Promise.all(updatePromises);
      toast.success(`Updated tags for ${selectedItems.size} item(s)`);
      setShowTagModal(false);
      setSelectedTagIds(new Set());
      // Refresh media to show updated tags
      fetchMedia();
    } catch (error) {
      console.error("Error updating tags:", error);
      toast.error(error.message || "Failed to update tags");
    } finally {
      setIsUpdatingTags(false);
    }
  };

  // --- Logic: Actions ---
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied URL to clipboard");
  };

  const getUsageDetails = (usageData) => {
    const details = [];
    if (usageData?.projects?.count > 0)
      details.push(`Projects: ${usageData.projects.count}`);
    if (usageData?.categories?.count > 0)
      details.push(`Categories: ${usageData.categories.count}`);
    if (usageData?.services?.count > 0)
      details.push(`Services: ${usageData.services.count}`);
    return details.length > 0 ? details.join(", ") : "No usage found";
  };

  const handleDelete = async (filename, e) => {
    try {
      const usageCheck = await checkMediaUsage(getImageUrl(filename));

      if (usageCheck.data.isUsed) {
        const usageInfo = [];
        if (usageCheck.data.usageDetails?.environments?.local) {
          usageInfo.push(
            `Local: ${getUsageDetails(
              usageCheck.data.usageDetails.environments.local,
            )}`,
          );
        }

        const confirmMsg = `File is in use:\n${usageInfo.join(
          "\n",
        )}\nDelete anyway?`;
        if (!window.confirm(confirmMsg)) return;
      } else if (!window.confirm("Delete permanently?")) {
        return;
      }

      await deleteMediaFile(filename);
      toast.success("Deleted");
      fetchMedia();

      // If deleting from selection mode, update selected items
      if (selectedItems.has(getImageUrl(filename))) {
        const newSet = new Set(selectedItems);
        newSet.delete(getImageUrl(filename));
        setSelectedItems(newSet);
      }
    } catch (error) {
      console.error(error);
      toast.error("Delete failed");
    }
  };

  const handleRename = async (oldFilename, e) => {
    if (!newFilename.trim()) {
      toast.error("Please enter a valid filename");
      return;
    }

    // Add file extension if not present
    const oldExt = oldFilename.split(".").pop();
    let finalNewFilename = newFilename.trim();
    if (!finalNewFilename.includes(".")) {
      finalNewFilename = `${finalNewFilename}.${oldExt}`;
    }

    try {
      setIsRenaming(true);
      await renameMediaFile(oldFilename, finalNewFilename);
      toast.success("File renamed successfully");
      setRenamingItem(null);
      setNewFilename("");
      fetchMedia();
    } catch (error) {
      console.error("Error renaming file:", error);
      toast.error(error.response?.data?.message || "Rename failed");
    } finally {
      setIsRenaming(false);
    }
  };

  const startRenaming = (item, e) => {
    setRenamingItem(item.name || item.filename);
    setNewFilename((item.name || item.filename).replace(/\.[^/.]+$/, ""));
  };

  const cancelRenaming = () => {
    setRenamingItem(null);
    setNewFilename("");
  };

  // --- Logic: Selection ---
  const toggleMediaSelection = (url, event) => {
    setSelectedItems((prev) => {
      const newSelection = new Set(prev);
      if (newSelection.has(url)) newSelection.delete(url);
      else newSelection.add(url);

      if (newSelection.size === 0) setIsSelectionMode(false);
      else if (!isSelectionMode) setIsSelectionMode(true);

      return newSelection;
    });
  };

  // --- New Logic: Date Group Selection ---
  const toggleDateGroupSelection = (items, event) => {
    // Check if all items in this group are currently selected
    const allSelected = items.every((item) => selectedItems.has(item.url));

    setSelectedItems((prev) => {
      const newSelection = new Set(prev);

      if (allSelected) {
        // Deselect all
        items.forEach((item) => newSelection.delete(item.url));
      } else {
        // Select all
        items.forEach((item) => newSelection.add(item.url));
      }

      if (newSelection.size > 0) setIsSelectionMode(true);
      else setIsSelectionMode(false);

      return newSelection;
    });
  };

  const selectAllMedia = () => {
    const allUrls = mediaWithTags.map((item) => item.url);
    setSelectedItems(new Set(allUrls));
    if (allUrls.length > 0) setIsSelectionMode(true);
  };

  const clearSelection = () => {
    setSelectedItems(new Set());
    setIsSelectionMode(false);
  };

  const handleMediaClick = (item, event) => {
    if (isSelectionMode || event.ctrlKey || event.metaKey) {
      toggleMediaSelection(item.url, event);
    } else {
      setSelectedMedia(item);
    }
  };

  const deleteSelectedItems = async () => {
    if (selectedItems.size === 0) return;
    if (!window.confirm(`Delete ${selectedItems.size} items?`)) return;

    try {
      const deletePromises = Array.from(selectedItems).map((url) => {
        const fileName = url.split("/").pop();
        return deleteMediaFile(fileName);
      });
      await Promise.all(deletePromises);

      setMedia((prev) => prev.filter((item) => !selectedItems.has(item.url)));
      clearSelection();
      toast.success("Items deleted");
    } catch (error) {
      toast.error("Error deleting items");
    }
  };

  const copySelectedUrls = () => {
    const urls = Array.from(selectedItems).join("\n");
    copyToClipboard(urls);
  };

  // --- Logic: Filtering & Grouping ---
  const groupMediaByDate = (mediaList) => {
    const groups = {};
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    mediaList.forEach((item) => {
      const date = new Date(item.uploadedAt || item.createdAt || new Date());
      let dateStr = date.toLocaleDateString();

      if (date.toDateString() === today.toDateString()) dateStr = "Today";
      else if (date.toDateString() === yesterday.toDateString())
        dateStr = "Yesterday";

      if (!groups[dateStr]) groups[dateStr] = [];
      groups[dateStr].push(item);
    });
    return groups;
  };

  const filteredMedia = mediaWithTags.filter((item) => {
    const matchesTab = activeTab === "all" || item.type === activeTab;
    const matchesSearch = (item.name || item.filename || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const groupedMedia = useMemo(
    () => groupMediaByDate(filteredMedia),
    [filteredMedia],
  );

  const getContainerClasses = () => {
    return "grid grid-cols-1 gap-2";
  };

  // --- Render ---
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F47C26]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 relative overflow-hidden font-sans transition-colors duration-300">
      {/* Ambience (Dark Mode Only) */}
      <div className="fixed inset-0 pointer-events-none hidden ">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F47C26]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-black text-gray-900">
              Manage Gallery
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {isSelectionMode ? (
              <div className="flex items-center gap-2 bg-white border border-gray-200 p-1.5 rounded-xl shadow-sm">
                <span className="text-xs text-black  px-2 font-medium">
                  {selectedItems.size} selected
                </span>

                <button
                  onClick={selectAllMedia}
                  className="p-2 hover:bg-gray-100  rounded-lg text-black  hover:text-gray-900  transition-colors"
                  title="Select All"
                >
                  <FiCheckSquare size={16} />
                </button>

                <button
                  onClick={copySelectedUrls}
                  className="p-2 hover:bg-gray-100  rounded-lg text-blue-500  transition-colors"
                  title="Copy URLs"
                >
                  <FiCopy size={16} />
                </button>

                <button
                  onClick={() => {
                    const commonTags = getCommonTagsFromSelectedMedia();
                    setSelectedTagIds(commonTags);
                    setShowTagModal(true);
                  }}
                  className="p-2 hover:bg-gray-100  rounded-lg text-purple-500  transition-colors"
                  title="Add Tags"
                >
                  <FiTag size={16} />
                </button>
                {/* Tag Selection Modal */}
                <div>
                  {showTagModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                      <div className="bg-white bg-gray-50 rounded-2xl w-full max-w-md overflow-hidden shadow-xl border border-gray-200">
                        <div className="p-6">
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-gray-900">
                              Add Tags to {selectedItems.size} Item(s)
                            </h3>
                            <button
                              onClick={() => {
                                setShowTagModal(false);
                                setSelectedTagIds(new Set());
                              }}
                              className="text-gray-400 hover:text-black ransition-colors"
                            >
                              <FaTimes />
                            </button>
                          </div>

                          <div className="mb-6">
                            <p className="text-sm text-black  mb-4">
                              Select tags to add to the selected media:
                            </p>

                            {tags.length > 0 ? (
                              <div className="flex flex-wrap gap-2">
                                {tags.map((tag) => (
                                  <button
                                    key={tag._id}
                                    onClick={() => toggleTagSelection(tag._id)}
                                    className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 transition-colors ${
                                      selectedTagIds.has(tag._id)
                                        ? "bg-purple-500 text-white"
                                        : "bg-gray-100 bg-white text-gray-700  hover:bg-gray-200 "
                                    }`}
                                  >
                                    {tag.name}
                                    {selectedTagIds.has(tag._id) && (
                                      <FaCheckCircle size={12} />
                                    )}
                                  </button>
                                ))}
                              </div>
                            ) : (
                              <div className="text-center py-4 text-black ">
                                <FaTags className="mx-auto text-2xl mb-2 opacity-50" />
                                <p>
                                  No tags found. Create tags in the Media Tags
                                  section.
                                </p>
                              </div>
                            )}
                          </div>

                          <div className="flex justify-end gap-3 pt-2 border-t border-gray-200 border-gray-200">
                            <button
                              onClick={() => {
                                setShowTagModal(false);
                                setSelectedTagIds(new Set());
                              }}
                              disabled={isUpdatingTags}
                              className="px-4 py-2 text-sm font-medium text-gray-700  hover:bg-gray-100  rounded-lg transition-colors"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={handleSaveTags}
                              disabled={
                                selectedTagIds.size === 0 || isUpdatingTags
                              }
                              className={`px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors flex items-center gap-2 ${
                                selectedTagIds.size === 0 || isUpdatingTags
                                  ? "bg-purple-400  cursor-not-allowed"
                                  : "bg-purple-500 hover:bg-purple-600"
                              }`}
                            >
                              {isUpdatingTags ? (
                                <>
                                  <FiRefreshCw className="animate-spin" />
                                  Saving...
                                </>
                              ) : (
                                `Add ${selectedTagIds.size} Tag(s)`
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  onClick={deleteSelectedItems}
                  className="p-2 hover:bg-gray-100  rounded-lg text-red-500  transition-colors"
                  title="Delete Selected"
                >
                  <FiTrash2 size={16} />
                </button>

                <div className="w-px h-6 bg-gray-200  mx-1"></div>

                <button
                  onClick={clearSelection}
                  className="p-2 hover:bg-gray-100  rounded-lg text-black  hover:text-gray-900  transition-colors"
                  title="Cancel"
                >
                  <FiX size={16} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsSelectionMode(true)}
                className="px-4 py-2 bg-white border border-gray-200 text-black  rounded-xl hover:bg-gray-50  transition-colors flex items-center gap-2 font-medium"
              >
                <FiCheckSquare size={16} /> <span>Select</span>
              </button>
            )}

            <Link
              to="/admin/media-gallery/upload"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#F47C26] hover:bg-[#d5671f] text-white rounded-xl text-sm font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all"
            >
              <FiUpload size={18} /> Upload
            </Link>
          </div>
        </div>

        {/* Toolbar */}
        <div className="bg-white backdrop-blur-xl border border-gray-200 p-4 rounded-2xl mb-8 flex flex-col xl:flex-row gap-4 justify-between items-center shadow-sm">
          {/* Tabs */}
          <div className="flex bg-gray-100  p-1 rounded-xl w-full xl:w-auto overflow-x-auto">
            {["all", "image", "video"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === tab
                    ? "bg-white bg-gray-50 text-[#F47C26] shadow-sm"
                    : "text-black  hover:text-gray-900 "
                }`}
              >
                <span className="capitalize">
                  {tab === "all" ? "All Assets" : tab + "s"}
                </span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeTab === tab
                      ? "bg-[#F47C26]/10 text-[#F47C26]"
                      : "bg-gray-200  text-black "
                  }`}
                >
                  {tab === "all"
                    ? media.length
                    : media.filter((m) => m.type === tab).length}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 w-full xl:w-auto">
            {/* Search */}
            <div className="relative w-full xl:w-64">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search filename..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-100  border border-transparent border-gray-200 focus:bg-white  rounded-xl text-sm text-gray-900 focus:outline-none focus:border-[#F47C26] focus:ring-1 focus:ring-[#F47C26] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Media Grid */}
        <div className="space-y-8 pb-20">
          {Object.entries(groupedMedia).map(([date, items]) => (
            <div key={date}>
              <div className="flex items-center justify-between mb-4 border-b border-gray-200  pb-2 sticky top-0 bg-gray-50/95 bg-gray-50/95 backdrop-blur-sm z-10 py-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-gray-700  text-sm font-bold uppercase tracking-wider">
                    {date}
                  </h3>
                  <span className="text-black text-xs font-normal bg-gray-200 bg-white px-2 py-0.5 rounded-full">
                    {items.length} items
                  </span>
                </div>

                {/* --- Restore Date Group Selection --- */}
                <button
                  onClick={(e) => toggleDateGroupSelection(items, e)}
                  className="flex items-center gap-1 text-xs font-medium text-blue-600  hover:text-blue-700  transition-colors"
                >
                  {items.every((item) => selectedItems.has(item.url)) ? (
                    <>
                      <FiCheckSquare className="text-lg" /> Deselect All
                    </>
                  ) : (
                    <>
                      <FiSquare className="text-lg" /> Select All
                    </>
                  )}
                </button>
              </div>

              <div className={getContainerClasses()}>
                <div>
                  {items.map((item) => (
                    <div
                      key={
                        item._id ||
                        item.filename ||
                        `media-${Math.random().toString(36).substr(2, 9)}`
                      }
                      variants={itemVariants}
                      layout
                      className={`group relative bg-white  border rounded-xl overflow-hidden cursor-pointer transition-all shadow-sm hover:shadow-xl break-inside-avoid flex items-center gap-4 p-2 mb-2 h-16 ${
                        selectedItems.has(item.url)
                          ? "border-blue-500 ring-2 ring-blue-500  "
                          : "border-gray-200  hover:border-[#F47C26]/50"
                      }`}
                      onClick={(e) => handleMediaClick(item, e)}
                    >
                      {/* Selection Checkbox Overlay */}
                      {(isSelectionMode || selectedItems.has(item.url)) && (
                        <div className="absolute top-2 left-2 z-20">
                          <div
                            className={`w-5 h-5 rounded flex items-center justify-center transition-colors shadow-sm ${
                              selectedItems.has(item.url)
                                ? "bg-blue-500 text-white"
                                : "bg-white  border border-gray-300  text-transparent hover:border-blue-400"
                            }`}
                          >
                            <FiCheckSquare size={12} />
                          </div>
                        </div>
                      )}

                      {/* Thumbnail */}
                      <div className="w-12 h-12 rounded-lg shrink-0 overflow-hidden relative bg-gray-100 ">
                        {item.type === "video" ? (
                          <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                            <FaPlay className="text-gray-400 text-gray-900/30 text-lg group-hover:text-[#F47C26] transition-colors relative z-10" />
                            <video
                              src={item.url}
                              className="absolute inset-0 w-full h-full object-cover opacity-60"
                              muted
                              loop
                              onMouseOver={(e) => e.target.play()}
                              onMouseOut={(e) => {
                                e.target.pause();
                                e.target.currentTime = 0;
                              }}
                            />
                          </div>
                        ) : (
                          <img
                            src={item.url || item.thumbnailUrl}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                        )}
                      </div>

                      {/* List View Info */}
                      <div className="flex-1 z-10 flex justify-between items-center pr-4">
                        <div>
                          {renamingItem === (item.name || item.filename) ? (
                            <div className="flex items-center gap-2">
                              <input
                                type="text"
                                value={newFilename}
                                onChange={(e) => {
                                  setNewFilename(e.target.value);
                                }}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") {
                                    handleRename(
                                      selectedMedia.name ||
                                        selectedMedia.filename,
                                      e,
                                    );
                                  } else if (e.key === "Escape") {
                                    cancelRenaming();
                                  }
                                }}
                                className="flex-1 px-2 py-1 text-sm border border-gray-300  rounded bg-white  text-gray-900 focus:outline-none focus:border-[#F47C26]"
                              />
                              <button
                                onClick={(e) => {
                                  handleRename(item.name || item.filename, e);
                                }}
                                disabled={isRenaming}
                                className="px-2 py-1 text-xs bg-green-500 hover:bg-green-600 text-white rounded disabled:opacity-50"
                              >
                                {isRenaming ? "Saving..." : "Save"}
                              </button>
                              <button
                                onClick={(e) => {
                                  cancelRenaming();
                                }}
                                className="px-2 py-1 text-xs bg-gray-500 hover:bg-gray-600 text-white rounded"
                              >
                                Cancel
                              </button>
                            </div>
                          ) : (
                            <>
                              <p className="font-bold text-gray-900  truncate">
                                {item.name || item.filename}
                              </p>
                              <p className="text-xs text-black">
                                {item.type} • {(item.size / 1024).toFixed(1)} KB
                              </p>
                              {item.tags && item.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {item.tags.slice(0, 2).map((tag) => (
                                    <span
                                      key={tag._id}
                                      className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] bg-gray-100  text-gray-700 "
                                      title={tag.name}
                                    >
                                      <FiTagIcon size={8} className="mr-1" />
                                      {tag.name}
                                    </span>
                                  ))}
                                  {item.tags.length > 2 && (
                                    <span className="text-[10px] text-gray-400">
                                      +{item.tags.length - 2} more
                                    </span>
                                  )}
                                </div>
                              )}
                              {item.tags && item.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {item.tags.slice(0, 2).map((tag, idx) => (
                                    <span
                                      key={idx}
                                      className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] bg-gray-100  text-gray-700 "
                                    >
                                      <FiTagIcon size={8} className="mr-1" />
                                      {tag.name}
                                    </span>
                                  ))}
                                  {item.tags.length > 2 && (
                                    <span className="text-[10px] text-gray-400">
                                      +{item.tags.length - 2} more
                                    </span>
                                  )}
                                </div>
                              )}
                            </>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              startRenaming(item, e);
                            }}
                            className="p-2 hover:bg-gray-100  rounded text-black  hover:text-gray-900 "
                            title="Rename"
                          >
                            <FiEdit />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(item.url);
                            }}
                            className="p-2 hover:bg-gray-100  rounded text-black  hover:text-gray-900 "
                            title="Copy Link"
                          >
                            <FiCopy />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(item.name || item.filename, e);
                            }}
                            className="p-2 hover:bg-red-50  rounded text-black  hover:text-red-600 "
                            title="Delete"
                          >
                            <FiTrash2 />
                          </button>
                        </div>
                      </div>

                      {/* Status Indicators */}
                      <div className="absolute top-2 right-2 flex gap-1 z-10">
                        {mediaInUse[item.name || item.filename] && (
                          <div
                            className="bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-lg flex items-center gap-1"
                            title="In Use"
                          >
                            <FaCheckCircle size={10} /> Used
                          </div>
                        )}
                        <div className="px-1.5 py-0.5 bg-white/80 text-gray-700 text-gray-900 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm border border-gray-200 rounded">
                          {item.type === "video" ? "VID" : "IMG"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {!isLoading && filteredMedia.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-dashed border-gray-300 border-gray-200">
              <div className="w-20 h-20 rounded-full bg-gray-100 bg-white flex items-center justify-center text-gray-400 mb-4">
                <FaImage size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                No media found
              </h3>
              <p className="text-black  text-sm mt-1">
                Upload new assets or adjust filters.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* --- Lightbox Modal --- */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-6xl w-full max-h-[90vh] bg-white bg-gray-50 rounded-2xl overflow-hidden border border-gray-700 border-gray-200 flex flex-col shadow-2xl"
            >
              {/* Lightbox Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-200 border-gray-200 bg-gray-50 ">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 bg-gray-200 bg-white rounded-lg text-[#F47C26]">
                    {selectedMedia.type === "video" ? <FaFilm /> : <FaImage />}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-gray-900 font-bold truncate text-sm md:text-base">
                      {selectedMedia.name || selectedMedia.filename}
                    </h3>
                    <p className="text-black text-xs uppercase tracking-wider">
                      {selectedMedia.mimetype}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="p-2 hover:bg-gray-200  rounded-lg text-black  hover:text-gray-900  transition-colors"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* Lightbox Content */}
              <div className="flex-1 bg-gray-100  flex items-center justify-center p-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
                {selectedMedia.type === "video" ? (
                  <video
                    src={selectedMedia.url}
                    controls
                    autoPlay
                    className="max-w-full max-h-full rounded-lg shadow-lg"
                  />
                ) : (
                  <img
                    src={selectedMedia.url}
                    alt="Preview"
                    className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                  />
                )}
              </div>

              {/* Lightbox Footer */}
              <div className="p-4 border-t border-gray-200 border-gray-200 bg-gray-50  flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-xs text-black flex gap-4">
                  <span>Size: {(selectedMedia.size / 1024).toFixed(2)} KB</span>
                  <span>
                    Dimensions:{" "}
                    {selectedMedia.width
                      ? `${selectedMedia.width}x${selectedMedia.height}`
                      : "N/A"}
                  </span>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  {renamingItem ===
                  (selectedMedia.name || selectedMedia.filename) ? (
                    <div className="flex items-center gap-2 flex-1">
                      <input
                        type="text"
                        value={newFilename}
                        onChange={(e) => {
                          setNewFilename(e.target.value);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleRename(
                              selectedMedia.name || selectedMedia.filename,
                              e,
                            );
                          } else if (e.key === "Escape") {
                            cancelRenaming();
                          }
                        }}
                        className="flex-1 px-3 py-2 text-sm border border-gray-300  rounded bg-white  text-gray-900 focus:outline-none focus:border-[#F47C26]"
                        placeholder="Enter new filename"
                        autoFocus
                      />
                      <button
                        onClick={(e) =>
                          handleRename(
                            selectedMedia.name || selectedMedia.filename,
                            e,
                          )
                        }
                        disabled={isRenaming}
                        className="px-3 py-2 text-sm bg-green-500 hover:bg-green-600 text-white rounded disabled:opacity-50"
                      >
                        {isRenaming ? "Saving..." : "Save"}
                      </button>
                      <button
                        onClick={cancelRenaming}
                        className="px-3 py-2 text-sm bg-gray-500 hover:bg-gray-600 text-white rounded"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <>
                      <button
                        onClick={() => startRenaming(selectedMedia)}
                        className="flex-1 sm:flex-none px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50  text-gray-700 text-gray-900 text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                      >
                        <FiEdit /> Rename
                      </button>
                      <a
                        href={selectedMedia.url}
                        download
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 sm:flex-none px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50  text-gray-700 text-gray-900 text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                      >
                        <FiDownload /> Download
                      </a>
                      <a
                        href={selectedMedia.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 sm:flex-none px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50  text-gray-700 text-gray-900 text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                      >
                        <FiExternalLink /> Open
                      </a>
                      <button
                        onClick={() => copyToClipboard(selectedMedia.url)}
                        className="flex-1 sm:flex-none px-6 py-2 bg-[#F47C26] hover:bg-[#d5671f] text-white text-sm font-bold rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2"
                      >
                        <FiCopy /> Copy Link
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;
