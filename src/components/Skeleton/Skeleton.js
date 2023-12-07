import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="card"
    speed={2}
    width={193}
    height={480}
    viewBox="0 0 193 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="14" y="1" rx="0" ry="0" width="165" height="234" />
    <rect x="3" y="327" rx="0" ry="0" width="102" height="35" />
    <rect x="3" y="386" rx="0" ry="0" width="97" height="16" />
    <rect x="148" y="370" rx="0" ry="0" width="40" height="40" />
    <rect x="1" y="433" rx="0" ry="0" width="192" height="44" />
    <rect x="2" y="286" rx="0" ry="0" width="190" height="20" />
    <rect x="2" y="258" rx="0" ry="0" width="190" height="20" />
  </ContentLoader>
);

export default Skeleton;
