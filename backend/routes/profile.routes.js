import express from 'express';
import {
  createProfile,
  getAllProfiles,
  getProfile,
  updateProfile,
  deleteProfile,
  getLocations
} from '../controllers/profile.controller.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getAllProfiles);
router.get('/locations', getLocations);
router.get('/:id', getProfile);

// Protected admin routes
router.use(protect);
router.use(authorize('admin'));

router.post('/', createProfile);
router.patch('/:id', updateProfile);
router.delete('/:id', deleteProfile);

export default router;
