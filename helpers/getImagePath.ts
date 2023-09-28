import { mediaPath } from '~/constants/variables';

const getFullImagePath = (imageId: string, type: 'large' | 'medium' | 'thumb') => {
  switch (type) {
    case 'large':
      return `${mediaPath.large}/${imageId}`;
    case 'medium':
      return `${mediaPath.medium}/${imageId}`;
    case 'thumb':
      return `${mediaPath.thumb}/${imageId}`;
  }
};
export default getFullImagePath;
