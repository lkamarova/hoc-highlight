import New from "./components/New";
import Popular from "./components/Popular";

export const withWrapperPopularNew = (Component) => (props) => {
  if (props.views > 1000) {
    return (
      <Popular>
        <Component {...props} />
      </Popular>
    );
  }
  if (props.views < 100)  {
    return (
        <New>
          <Component {...props} />
        </New>
      );
  }
  return <Component {...props} />
};
