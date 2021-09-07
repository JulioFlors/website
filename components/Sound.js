export const Sound = ({ track }) => {
  return (
    <iframe
      src={`https://open.spotify.com/embed/track/${track}`}
      width="100%"
      height="232"
      frameBorder="0"
      allowTransparency="true"
      allow="encrypted-media"
    ></iframe>
  )
}
