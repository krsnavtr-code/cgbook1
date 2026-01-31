import Profile from '../models/Profile.model.js';
import AppError from '../utils/appError.js';
import catchAsync from '../utils/catchAsync.js';

/**
 * @desc    Create a new profile
 * @route   POST /api/profiles
 * @access  Private/Admin
 */
export const createProfile = catchAsync(async (req, res, next) => {
  const {
    name,
    age,
    location,
    status,
    tags,
    img,
    rating,
    isActive,
    isNew,
    title,
    shortContent,
    longContent,
    metaTitle,
    metaKeywords,
    metaDescription
  } = req.body;
  

  const profile = await Profile.create({
    name,
    age,
    location,
    status,
    tags,
    img,
    rating,
    isActive,
    isNew,
    title,
    shortContent,
    longContent,
    metaTitle,
    metaKeywords,
    metaDescription,
    createdBy: req.user.id
  });


  res.status(201).json({
    status: 'success',
    data: {
      profile
    }
  });
});

/**
 * @desc    Get all profiles (public)
 * @route   GET /api/profiles
 * @access  Public
 */
export const getAllProfiles = catchAsync(async (req, res, next) => {
  const { page = 1, limit = 25, location, status } = req.query;
  const skip = (page - 1) * limit;

  // Build query
  const query = { isActive: true };
  
  if (location && location !== 'All Cities') {
    query.location = location;
  }
  
  if (status) {
    query.status = status;
  }

  const profiles = await Profile.find(query)
    .skip(skip)
    .limit(parseInt(limit))
    .sort({ createdAt: -1 });

  const total = await Profile.countDocuments(query);

  res.status(200).json({
    status: 'success',
    results: profiles.length,
    total,
    data: {
      profiles
    }
  });
});

/**
 * @desc    Get a single profile
 * @route   GET /api/profiles/:id
 * @access  Public
 */
export const getProfile = catchAsync(async (req, res, next) => {
  const profile = await Profile.findOne({ 
    _id: req.params.id, 
    isActive: true 
  });
  
  if (!profile) {
    return next(new AppError('No profile found with that ID', 404));
  }
  
  res.status(200).json({
    status: 'success',
    data: {
      profile
    }
  });
});

/**
 * @desc    Update a profile
 * @route   PATCH /api/profiles/:id
 * @access  Private/Admin
 */
export const updateProfile = catchAsync(async (req, res, next) => {
  const {
    name,
    age,
    location,
    status,
    tags,
    img,
    rating,
    isActive,
    isNew,
    title,
    shortContent,
    longContent,
    metaTitle,
    metaKeywords,
    metaDescription
  } = req.body;
  
  const profile = await Profile.findByIdAndUpdate(
    req.params.id,
    {
      name,
      age,
      location,
      status,
      tags,
      img,
      rating,
      isActive,
      isNew,
      title,
      shortContent,
      longContent,
      metaTitle,
      metaKeywords,
      metaDescription,
      updatedBy: req.user.id
    },
    {
      new: true,
      runValidators: true
    }
  );
  
  if (!profile) {
    return next(new AppError('No profile found with that ID', 404));
  }
  
  res.status(200).json({
    status: 'success',
    data: {
      profile
    }
  });
});

/**
 * @desc    Delete a profile
 * @route   DELETE /api/profiles/:id
 * @access  Private/Admin
 */
export const deleteProfile = catchAsync(async (req, res, next) => {
  const profile = await Profile.findByIdAndUpdate(
    req.params.id,
    { isActive: false },
    { new: true }
  );
  
  if (!profile) {
    return next(new AppError('No profile found with that ID', 404));
  }
  
  res.status(204).json({
    status: 'success',
    data: null
  });
});

/**
 * @desc    Get available locations
 * @route   GET /api/profiles/locations
 * @access  Public
 */
export const getLocations = catchAsync(async (req, res, next) => {
  const locations = await Profile.distinct('location', { isActive: true });
  
  res.status(200).json({
    status: 'success',
    data: {
      locations: ['All Cities', ...locations]
    }
  });
});
