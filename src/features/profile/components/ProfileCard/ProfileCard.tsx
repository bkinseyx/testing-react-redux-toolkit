import React from 'react';
import { useSelector } from 'react-redux';

import { ProfileItem } from '../ProfileItem/ProfileItem';
import { profileListSelector } from '../../selectors/profileListSelector';
import { getCreateOnClick } from './getCreateOnClick';
import { CardFooterWrapper } from 'app/components/CardFooterWrapper/CardFooterWrapper';

export const ProfileCard: React.FC = () => {
  const profileList = useSelector(profileListSelector);
  return (
    <div className="card" role="main" aria-label="Profile Card">
      <div className="card-header">
        <h5 className="card-title">Profiles</h5>
      </div>
      <div className="card-body">
        <ul className="list-group">
          {profileList.map((profile) => (
            <ProfileItem
              key={profile.profileId}
              profile={profile}
            ></ProfileItem>
          ))}
        </ul>
      </div>
      <div className="card-footer">
        <CardFooterWrapper>
          <button className="btn btn-primary" onClick={getCreateOnClick()}>
            Create New Profile
          </button>
        </CardFooterWrapper>
      </div>
    </div>
  );
};
