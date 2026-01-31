import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 100
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['Online', 'Offline'],
    default: 'Online'
  },
  tags: [{
    type: String,
    trim: true
  }],
  img: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 4.9,
    min: 0,
    max: 5
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;
