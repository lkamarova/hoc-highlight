import { withWrapperPopularNew } from "../hoc";

const Video = ({ url, views }) => {
  return (
    <div className="item item-video">
      <iframe
        title="video"
        src={url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <p className="views">Просмотров: {views}</p>
    </div>
  );
};

export default withWrapperPopularNew(Video);
