import user from '../user/user.json';
import { Profile } from './Profile/Profile';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
    
  );
};
// console.log(user);
