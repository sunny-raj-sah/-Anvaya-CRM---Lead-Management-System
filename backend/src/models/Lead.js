import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Lead name is required"],
      trim: true,
    },

    source: {
  type: String,
  required: [true, "Lead source is required"],
  enum: [
    "Website",
    "Referral",
    "Cold Call",
    "LinkedIn",
    "Facebook",
    "Instagram",
    "Email Campaign",
    "Trade Show",
  ],
},

    salesAgent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agent",
      required: true,
    },

    status: {
      type: String,
      enum: [
        "New",
        "Contacted",
        "Qualified",
        "Proposal Sent",
        "Closed",
       
      ],
      default: "New",
    },

    priority: {
      type: String,
      enum: [
        "High",
        "Medium",
        "Low",
      ],
      default: "Medium",
    },

    timeToClose: {
      type: Number,
      default: 30,
    },

    tags: [
      {
        type: String,
           trim: true,
      },
    ],

    closedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Lead = mongoose.model(
  "Lead",
  leadSchema
);

export default Lead;