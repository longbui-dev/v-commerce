import "./index.scss";
interface PropsPictureInLatestBlog {
  image: string;
}

function ImageLatestBlog(props: PropsPictureInLatestBlog) {
  return (
    <div className="flex justify-center backgroundImg imageLatestBlog">
      <img src={props.image} alt="Latest Blog" />
      <div className="backgroundImgHover"></div>
    </div>
  );
}

export default ImageLatestBlog;
