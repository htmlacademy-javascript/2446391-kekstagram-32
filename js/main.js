const getRandom = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const descriptions = [
  '🌟 Живу, мечтаю, создаю.',
  '✈️ Вечно на пути к новому приключению.',
  '📸 Захватываю моменты жизни.',
  '🎨 Творю искусство в каждом дне.',
  '🍕 Пицца и радость жизни.',
  '📚 Погружаюсь в мир книг и знаний.',
  '🌿 Живу в гармонии с природой.',
  '🏋️‍♂️ Постоянно совершенствую себя.',
  '🌟 Следую за мечтами.',
  '🌍 Исследую мир, одну страну за раз.',
  '🎵 Мелодия моей жизни.',
  '🥑 Люблю здоровую пищу и фитнес.',
  '📈 Постоянно учусь и расту.',
  '🎬 Кино и жизнь – две великие драмы.',
  '💡 Идеи и вдохновение в каждом дне.',
  '🍃 Найди красоту в простых вещах.',
  '🌺 Цветы – моя страсть и вдохновение.',
  '🍦 Ловлю сладкие моменты жизни.',
  '📖 Пишу свою собственную историю.',
  '🌠 Мечты без границ.',
  '🌸 Ценю каждое мгновение.',
  '🚴‍♂️ Живу активно и энергично.',
  '💼 Работай усердно, играй еще усерднее.',
  '🧘‍♂️ На пути к внутреннему спокойствию.',
  '🌞 Приношу свет в каждый день.',
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = [
  'Алексей',
  'Ольга',
  'Дмитрий',
  'Наталья',
  'Михаил',
  'Екатерина',
  'Иван',
  'Марина',
  'Сергей',
  'Алина',
  'Андрей',
  'Юлия',
  'Владимир',
  'Анна',
  'Николай',
  'Елена',
  'Павел',
  'Светлана',
  'Артём',
  'Виктория',
  'Роман',
  'Татьяна',
  'Максим',
  'Лариса',
  'Денис',
];

const getRandomArrayElement = (elements) => elements[getRandom(0, elements.length - 1)];

const usedPictureIds = new Set();
const usedCommentIds = new Set();

const generateUniqueId = (usedIds, min, max) => {
  let id;
  do {
    id = getRandom(min, max);
  } while (usedIds.has(id));
  usedIds.add(id);
  return id;
};

const getComment = () => ({
  id: generateUniqueId(usedCommentIds, 1, 1000),
  avatar: `img/avatar-${getRandom(1, 6)}.svg`,
  message: getRandomArrayElement(messages),
  name: getRandomArrayElement(names),
});

const getPicture = () => ({
  id: generateUniqueId(usedPictureIds, 1, 25),
  url: `photos/${getRandom(1, 25)}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: `${getRandom(15, 300)}❤️`,
  comments: Array.from({ length: getRandom(1, 30) }, () => getComment()),
});

const similarPictures = Array.from({ length: 25 }, () => getPicture());

console.log(similarPictures); // eslint-disable-line

