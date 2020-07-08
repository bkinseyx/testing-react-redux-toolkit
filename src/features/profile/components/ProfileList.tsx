import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'app/store';
import { ProfileItem } from './ProfileItem';

export const ProfileList: React.FC = () => {
  const profileList = useSelector(
    (state: RootState) => state.profile.profileList,
  );
  return (
    <ul>
      {profileList.map((profile) => (
        <ProfileItem key={profile.profileId} profile={profile}></ProfileItem>
      ))}
    </ul>
  );
};
// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   createProfile,
//   deleteProfile,
//   updateProfile,
// } from '../redux/profileSlice';

// export function MyForm() {
//   const count = useSelector(selectCount);
//   const dispatch = useDispatch();
//   const [incrementAmount, setIncrementAmount] = useState('2');

//   return (
//     <div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           +
//         </button>
//         <span>{count}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           -
//         </button>
//       </div>
//       <div>
//         <input
//           aria-label="Set increment amount"
//           value={incrementAmount}
//           onChange={(e) => setIncrementAmount(e.target.value)}
//         />
//         <button
//           onClick={() =>
//             dispatch(incrementByAmount(Number(incrementAmount) || 0))
//           }
//         >
//           Add Amount
//         </button>
//         <button
//           onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
//         >
//           Add Async
//         </button>
//       </div>
//     </div>
//   );
// }
