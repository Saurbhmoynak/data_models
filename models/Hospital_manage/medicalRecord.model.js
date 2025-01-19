import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "patient", // Reference to the patient collection
      required: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctor", // Reference to the doctor collection
      required: true,
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hospital", // Reference to the hospital collection
      required: true,
    },
    diagnosis: {
      type: String,
      required: true,
    },
    treatments: [
      {
        type: String, // Array of treatment names or descriptions
      },
    ],
    followUpDate: {
      type: Date, // Date for the follow-up appointment
    },
    notes: {
      type: String, // Additional notes by the doctor
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctor", // Doctor who created this record
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctor", // Doctor who last updated this record
    },
  },
  { timestamps: true }
);

export const medicalRecord = mongoose.model("medicalRecord", medicalRecordSchema);
