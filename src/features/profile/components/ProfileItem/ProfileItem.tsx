import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ProfileItem.module.css';
import classNames from 'classnames';

import { Profile } from '../../profileSlice';
import { CustomSelect } from 'app/components/CustomSelect/CustomSelect';
import { CustomTextInput } from 'app/components/CustomTextInput/CustomTextInput';
import { emptyProfile } from '../../helpers/profileTemplate';
import { profileTypesSelector } from '../../selectors/profileTypesSelector';
import { getIsActiveSelector } from '../../selectors/isActiveSelector';
import { getNameOnChange } from './getNameOnChange';
import { getTypeOnChange } from './getTypeOnChange';
import { getItemOnClick } from './getItemOnClick';
import { getDeleteOnClick } from './getDeleteOnClick';

interface ProfileProps {
  profile: Profile;
}

export const ProfileItem: React.FC<ProfileProps> = ({
  profile = emptyProfile,
}) => {
  const profileTypes = useSelector(profileTypesSelector);
  const isActive = useSelector(getIsActiveSelector(profile));

  return (
    <li
      className={classNames('list-group-item', styles.profileItem, {
        active: isActive,
      })}
      onClick={getItemOnClick(profile.profileId)}
    >
      <CustomTextInput
        idPrefix={`name-${profile.profileId}`}
        label={'Name'}
        value={profile.name}
        onChange={getNameOnChange(profile.profileId)}
        autoFocus={isActive}
      />
      <CustomSelect
        idPrefix={`type-${profile.profileId}`}
        label={'Type'}
        value={profile.profileType}
        options={profileTypes}
        onChange={getTypeOnChange(profile.profileId)}
      />
      <div className={styles.buttonWrapper}>
        <button
          className="btn btn-danger"
          onClick={getDeleteOnClick(profile.profileId)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
