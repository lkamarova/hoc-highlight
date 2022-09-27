import Article from "./Article";
import Video from "./Video";

const List = ({ list }) => {
  return list.map((item) => {
    switch (item.type) {
      case "video":
        return <Video {...item} />;

      case "article":
        return <Article {...item} />;

      default:
        return null;
    }
  });
};

export default List;
