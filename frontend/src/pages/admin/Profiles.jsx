import React, { useState, useEffect } from "react";
import {
  getProfiles,
  createProfile,
  updateProfile,
  deleteProfile,
} from "../../api/profileApi";
import { getUploadedImages } from "../../api/imageApi";
import {
  UserGroupIcon,
  PlusIcon,
  PencilSquareIcon,
  TrashIcon,
  MapPinIcon,
  StarIcon,
  CheckBadgeIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProfile, setEditingProfile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    location: "",
    status: "Online",
    tags: [],
    img: "",
    rating: 4.9,
    isActive: true,
    title: "",
    shortContent: "",
    longContent: "",
    metaTitle: "",
    metaKeywords: "",
    metaDescription: "",
  });
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Fetch profiles and images on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      // Fetch profiles
      const profilesResponse = await getProfiles();
      const profilesData =
        profilesResponse.data?.profiles || profilesResponse.data || [];
      setProfiles(profilesData);

      // Fetch images for selection
      const imagesResponse = await getUploadedImages();
      const imagesData = imagesResponse.data || [];
      setImages(imagesData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingProfile) {
        await updateProfile(editingProfile._id || editingProfile.id, formData);
      } else {
        await createProfile(formData);
      }

      setIsModalOpen(false);
      setEditingProfile(null);
      setFormData({
        name: "",
        age: "",
        location: "",
        status: "Online",
        tags: [],
        img: "",
        rating: 4.9,
        isActive: true,
        title: "",
        shortContent: "",
        longContent: "",
        metaTitle: "",
        metaKeywords: "",
        metaDescription: "",
      });
      fetchData(); // Refresh the list
    } catch (error) {
      console.error("Error saving profile:", error);
      alert(
        "Error saving profile: " +
          (error.response?.data?.message || error.message),
      );
    }
  };

  const handleEdit = (profile) => {
    setEditingProfile(profile);
    setFormData({
      name: profile.name,
      age: profile.age,
      location: profile.location,
      status: profile.status,
      tags: profile.tags || [],
      img: profile.img,
      rating: profile.rating || 4.9,
      isActive: profile.isActive !== false,
      title: profile.title || "",
      shortContent: profile.shortContent || "",
      longContent: profile.longContent || "",
      metaTitle: profile.metaTitle || "",
      metaKeywords: profile.metaKeywords || "",
      metaDescription: profile.metaDescription || "",
    });
    setIsModalOpen(true);
  };

  const handleViewDetails = (profile) => {
    setSelectedProfile(profile);
    setIsDetailsModalOpen(true);
  };

  const handleDelete = async (profileId) => {
    if (window.confirm("Are you sure you want to delete this profile?")) {
      try {
        await deleteProfile(profileId);
        fetchData(); // Refresh the list
      } catch (error) {
        console.error("Error deleting profile:", error);
        alert(
          "Error deleting profile: " +
            (error.response?.data?.message || error.message),
        );
      }
    }
  };

  const handleTagsChange = (e) => {
    const tags = e.target.value
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag);
    setFormData({ ...formData, tags });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Profiles{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Management
            </span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {profiles.length} total profiles active on the platform.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-200 dark:shadow-none transition-all active:scale-95"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          New Profile
        </button>
      </div>

      {/* Main Content: Table Container */}
      <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-700">
                <th className="px-6 py-4 text-xs font-bold uppercase text-gray-400 tracking-wider">
                  User
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-gray-400 tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-gray-400 tracking-wider">
                  Attributes
                </th>
                <th className="px-6 py-4 text-right text-xs font-bold uppercase text-gray-400 tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-gray-700">
              {profiles.map((profile) => (
                <tr
                  key={profile._id || profile.id}
                  className="hover:bg-gray-50/80 dark:hover:bg-gray-700/30 transition-colors"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          className="h-12 w-12 rounded-2xl object-cover ring-2 ring-gray-100 dark:ring-gray-700"
                          src={profile.img}
                          alt=""
                        />
                        {profile.status === "Online" && (
                          <span className="absolute -bottom-1 -right-1 block h-3.5 w-3.5 rounded-full bg-green-500 border-2 border-white dark:border-gray-800 animate-pulse" />
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white flex items-center gap-1">
                          {profile.name}
                          {profile.rating >= 4.8 && (
                            <CheckBadgeIcon className="h-4 w-4 text-blue-500" />
                          )}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center gap-1">
                          <MapPinIcon className="h-3 w-3" /> {profile.location}{" "}
                          • {profile.age}y
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <StarIcon className="h-4 w-4 text-amber-400" />
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        {profile.rating}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-wrap gap-1.5">
                      {profile.tags?.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-[10px] font-bold uppercase rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleViewDetails(profile)}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-all"
                        title="View Details"
                      >
                        <EyeIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleEdit(profile)}
                        className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-all"
                        title="Edit Profile"
                      >
                        <PencilSquareIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(profile._id || profile.id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-all"
                        title="Delete Profile"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white dark:bg-gray-800">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                {editingProfile ? "Edit Profile" : "Add New Profile"}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    required
                    min="18"
                    max="100"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        age: parseInt(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    value={formData.tags.join(", ")}
                    onChange={handleTagsChange}
                    placeholder="Premium, Verified, Hot"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Profile Image
                  </label>
                  <select
                    required
                    value={formData.img}
                    onChange={(e) =>
                      setFormData({ ...formData, img: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">Select an image</option>
                    {images.map((image) => (
                      <option
                        key={image.url || image.name}
                        value={image.url || image.name}
                      >
                        {image.name || image.url}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Rating
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="5"
                    step="0.1"
                    value={formData.rating}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        rating: parseFloat(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    placeholder="Profile title for SEO"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Short Content
                  </label>
                  <textarea
                    value={formData.shortContent}
                    onChange={(e) =>
                      setFormData({ ...formData, shortContent: e.target.value })
                    }
                    placeholder="Brief description (150 chars max)"
                    maxLength="150"
                    rows="2"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Long Content
                  </label>
                  <textarea
                    value={formData.longContent}
                    onChange={(e) =>
                      setFormData({ ...formData, longContent: e.target.value })
                    }
                    placeholder="Detailed profile description"
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Meta Title
                  </label>
                  <input
                    type="text"
                    value={formData.metaTitle}
                    onChange={(e) =>
                      setFormData({ ...formData, metaTitle: e.target.value })
                    }
                    placeholder="SEO meta title (60 chars max)"
                    maxLength="60"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Meta Keywords
                  </label>
                  <input
                    type="text"
                    value={formData.metaKeywords}
                    onChange={(e) =>
                      setFormData({ ...formData, metaKeywords: e.target.value })
                    }
                    placeholder="Comma-separated keywords"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Meta Description
                  </label>
                  <textarea
                    value={formData.metaDescription}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        metaDescription: e.target.value,
                      })
                    }
                    placeholder="SEO meta description (160 chars max)"
                    maxLength="160"
                    rows="2"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isActive"
                    checked={formData.isActive}
                    onChange={(e) =>
                      setFormData({ ...formData, isActive: e.target.checked })
                    }
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="isActive"
                    className="ml-2 block text-sm text-gray-900 dark:text-white"
                  >
                    Active
                  </label>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false);
                      setEditingProfile(null);
                      setFormData({
                        name: "",
                        age: "",
                        location: "",
                        status: "Online",
                        tags: [],
                        img: "",
                        rating: 4.9,
                        isActive: true,
                        title: "",
                        shortContent: "",
                        longContent: "",
                        metaTitle: "",
                        metaKeywords: "",
                        metaDescription: "",
                      });
                    }}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  >
                    {editingProfile ? "Update" : "Create"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Details Modal */}
      {isDetailsModalOpen && selectedProfile && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-10 mx-auto p-5 border w-full max-w-4xl shadow-lg rounded-md bg-white dark:bg-gray-800 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Profile Details - {selectedProfile.name}
              </h3>
              <button
                onClick={() => {
                  setIsDetailsModalOpen(false);
                  setSelectedProfile(null);
                }}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src={selectedProfile.img}
                    alt={selectedProfile.name}
                    className="h-20 w-20 rounded-2xl object-cover ring-2 ring-gray-100 dark:ring-gray-700"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {selectedProfile.name}, {selectedProfile.age}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPinIcon className="h-4 w-4" />
                      {selectedProfile.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <StarIcon className="h-4 w-4 text-amber-400" />
                      <span className="font-semibold">
                        {selectedProfile.rating || 4.9}
                      </span>
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          selectedProfile.status === "Online"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {selectedProfile.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Tags
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedProfile.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-sm font-medium rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Profile Status
                  </h5>
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                        selectedProfile.isActive !== false
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      }`}
                    >
                      {selectedProfile.isActive !== false
                        ? "Active"
                        : "Inactive"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Details */}
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Title
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                    {selectedProfile.title || "No title set"}
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Short Content
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                    {selectedProfile.shortContent || "No short content set"}
                  </p>
                  {selectedProfile.shortContent && (
                    <p className="text-xs text-gray-500 mt-1">
                      {selectedProfile.shortContent.length}/150 characters
                    </p>
                  )}
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Long Content
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 p-3 rounded-md whitespace-pre-wrap">
                    {selectedProfile.longContent || "No long content set"}
                  </p>
                </div>
              </div>
            </div>

            {/* SEO Details */}
            <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                SEO Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Meta Title
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                    {selectedProfile.metaTitle || "No meta title set"}
                  </p>
                  {selectedProfile.metaTitle && (
                    <p className="text-xs text-gray-500 mt-1">
                      {selectedProfile.metaTitle.length}/60 characters
                    </p>
                  )}
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Meta Keywords
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                    {selectedProfile.metaKeywords || "No meta keywords set"}
                  </p>
                </div>

                <div className="md:col-span-2">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Meta Description
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                    {selectedProfile.metaDescription ||
                      "No meta description set"}
                  </p>
                  {selectedProfile.metaDescription && (
                    <p className="text-xs text-gray-500 mt-1">
                      {selectedProfile.metaDescription.length}/160 characters
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => {
                  setIsDetailsModalOpen(false);
                  setSelectedProfile(null);
                }}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setIsDetailsModalOpen(false);
                  handleEdit(selectedProfile);
                }}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profiles;
