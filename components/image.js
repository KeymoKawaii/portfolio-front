import { getStrapiMedia } from "../lib/media";

const StrapiImage = ({ image, style }) => {
  const imageUrl = getStrapiMedia(image);

  return (
    <img
      src={imageUrl}
      alt={image.alternativeText || image.name}
      style={style}
    />
  );
};

export default StrapiImage;