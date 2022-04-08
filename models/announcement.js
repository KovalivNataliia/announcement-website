const { Schema, model } = require('mongoose');

const announcementSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: new Date().toString(),
  },
}, { versionKey: false });

const Announcement = module.exports = model('Announcement', announcementSchema);

module.exports.getAnnouncements = () => Announcement.find();

module.exports.getAnnouncementById = id => Announcement.findById(id);

module.exports.saveAnnouncement = announcement => announcement.save();

module.exports.deleteAnnouncement = id => Announcement.findByIdAndRemove(id);

module.exports.updateAnnouncement = (_id, announcement) => {
  return Announcement.findByIdAndUpdate({ _id }, announcement);
};

module.exports.getAnnouncementsByTitle = text => {
  return Announcement.find({ title: { "$regex": text, "$options": "i" } });
} 