const Announcement = require('../models/announcement');

const getSimilar = async (announcement) => {
  const resultObj = {};
  const selectedTitleUnique = getUnique(announcement.title);
  const selectedDescriptionUnique = getUnique(announcement.description);
  const announcements = await Announcement.getAnnouncementsExceptSelected(announcement._id);
  announcements.map(item => {
    const itemTitleUnique = getUnique(item.title);
    const itemDescriptionUnique = getUnique(item.description);
    const intersectionTitle = getIntersection(selectedTitleUnique, itemTitleUnique);
    const intersectionDescription = getIntersection(selectedDescriptionUnique, itemDescriptionUnique);
    if (intersectionTitle.length && intersectionDescription.length) {
      const intersectionsCount = intersectionTitle.length + intersectionDescription.length;
      resultObj[JSON.stringify(item)] = intersectionsCount;
    }
  })
  const sortedObj = sortObj(resultObj);
  const result = Object.values(sortedObj).slice(0, 3).map(el => JSON.parse(el));
  return result.length ? result : undefined;
}

const getUnique = (str) => {
  const arr = str.replace(/[^a-zа-я ]/ig, '').toLowerCase().split(' ');
  return new Set(arr);
}

const getIntersection = (selectedUnique, itemUnique) => {
  return [...itemUnique].filter(word => selectedUnique.has(word));
}

const sortObj = (unsortedObj) => {
  return Object.keys(unsortedObj).sort((a, b) => unsortedObj[b] - unsortedObj[a]);
}

module.exports = {
  getSimilar
};