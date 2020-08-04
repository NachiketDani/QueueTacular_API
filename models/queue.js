const mongoose = require('mongoose');

const Item = require('./item').schema;

const { Schema } = mongoose;

const queueSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['Open', 'Closed'],
      required: true,
    },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    description: String,
    maxParticipants: Number,
    startDate: Date,
    endDate: Date,
    items: [Item],
  },
  { timestamps: true },
);


const Queue = mongoose.model('Queue', queueSchema);
module.exports = Queue;
