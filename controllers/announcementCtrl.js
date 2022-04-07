const Announcement = require('../models/announcement');

const getAnnouncements = async (req, res) => {

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

};

const updateAnnouncement = async (req, res) => {

};

const deleteAnnouncement = async (req, res) => {

};

module.exports = {
  getAnnouncements,
  addAnnouncement,
  getAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
};
