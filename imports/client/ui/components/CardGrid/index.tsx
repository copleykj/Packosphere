import React from 'react';
import { LatestPackage } from 'meteor/peerlibrary:meteor-packages';
import PackageCard from '../PackageCard';

interface CardGridProps {
  cardData: Array<Pick<LatestPackage, 'packageName' | 'description'>>
};

export default ({ cardData }: CardGridProps): JSX.Element => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
    {cardData.map(data => <PackageCard data={data} />)}
  </ul>
);