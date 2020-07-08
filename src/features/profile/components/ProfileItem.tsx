import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ProfileItem.module.css';

import { Profile, updateProfile, ProfileType } from '../redux/profileSlice';
import { RootState } from 'app/store';
import { CustomSelect } from 'app/components/CustomSelect';
import { CustomTextInput } from 'app/components/CustomInput';

interface ProfileProps {
  profile: Profile;
}

export const ProfileItem: React.FC<ProfileProps> = ({ profile }) => {
  const dispatch = useDispatch();
  const profileTypes = useSelector(
    (state: RootState) => state.profile.profileTypes,
  );

  const nameOnChange = (name: string): void => {
    dispatch(
      updateProfile({
        profileId: profile.profileId,
        name,
      }),
    );
  };
  const typeOnChange = (value: string): void => {
    dispatch(
      updateProfile({
        profileId: profile.profileId,
        profileType: value as ProfileType,
      }),
    );
  };

  return (
    <li className={styles.profileItem}>
      <CustomTextInput
        idPrefix={`name-${profile.profileId}`}
        label={'Name'}
        value={profile.name}
        onChange={nameOnChange}
      />
      <CustomSelect
        idPrefix={`type-${profile.profileId}`}
        label={'Type'}
        value={profile.profileType}
        options={profileTypes as string[]}
        onChange={typeOnChange}
      />
      <div className={styles.buttonWrapper}>
        <button className="btn btn-danger">Delete</button>
      </div>
    </li>
  );
};
