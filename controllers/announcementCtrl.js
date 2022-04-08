const Announcement = require('../models/announcement');

const getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.getAnnouncements();
    res.status(200).json({ announcements });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
    console.log(err);
  }
};

const addAnnouncement = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newAnnouncement = new Announcement({
      title,
      description,
    });
    const announcement = await Announcement.saveAnnouncement(newAnnouncement);
    res.status(200).json({ announcement });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
    console.log(err);
  }
};

const getAnnouncement = async (req, res) => {
  const id = req.params.id;
  try {
    const announcement = await Announcement.getAnnouncementById(id);
    res.status(200).json({ announcement });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
    console.log(err);
  }
};

const updateAnnouncement = async (req, res) => {
  const id = req.params.id;
  const announcement = req.body;
  try {
    await Announcement.updateAnnouncement(id, announcement);
    res.status(200).json({ message: 'Success' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
    console.log(err);
  }
};

const deleteAnnouncement = async (req, res) => {
  const id = req.params.id;
  try {
    await Announcement.deleteAnnouncement(id);
    res.status(200).json({ message: 'Success' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
    console.log(err);
  }
};

module.exports = {
  getAnnouncements,
  addAnnouncement,
  getAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
};
