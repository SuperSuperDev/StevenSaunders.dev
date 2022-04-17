export default function VideoSubHeading(props) {
  const { video } = props;

  return (
    <div>
      {!video ? (
        <div>Video Loading</div>
      ) : (
        <div>
          <h2>I am the subHeading</h2>
          {video.title}
        </div>
      )}
    </div>
  );
}
