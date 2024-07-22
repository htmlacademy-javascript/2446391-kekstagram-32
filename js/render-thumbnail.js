const pictureContainerElement = document.querySelector('.pictures');
const pictureTemplateElement = document.querySelector('#picture').content.querySelector('.picture');


const similarPictures = (pictures) => {
  const similarListFragment = document.createDocumentFragment();
  pictures.forEach(( picture, index ) => {
    const pictureElement = pictureTemplateElement.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = picture.url;
    pictureElement.querySelector('.picture__img').dataset.photoId = index + 1;
    pictureElement.querySelector('.picture__likes').textContent = picture.likes;
    pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
    similarListFragment.append(pictureElement);
  });
  pictureContainerElement.append(similarListFragment);
};

export {similarPictures};
