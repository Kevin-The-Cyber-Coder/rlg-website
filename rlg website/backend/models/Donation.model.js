const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  donor: {
    name: {
      type: String,
      required: [true, 'Please add donor name']
    },
    email: {
      type: String,
      required: [true, 'Please add donor email']
    },
    phone: String,
    address: {
      street: String,
      city: String,
      country: String
    }
  },
  amount: {
    type: Number,
    required: [true, 'Please add donation amount'],
    min: [1, 'Amount must be at least 1']
  },
  currency: {
    type: String,
    default: 'USD'
  },
  paymentMethod: {
    type: String,
    enum: ['credit_card', 'paypal', 'bank_transfer', 'cash'],
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'refunded'],
    default: 'pending'
  },
  transactionId: String,
  donationType: {
    type: String,
    enum: ['one-time', 'monthly', 'yearly'],
    default: 'one-time'
  },
  message: {
    type: String,
    maxlength: [500, 'Message cannot be more than 500 characters']
  },
  isAnonymous: {
    type: Boolean,
    default: false
  },
  receiptSent: {
    type: Boolean,
    default: false
  },
  notes: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Donation', donationSchema);