import PropTypes from 'prop-types';
import css from './Profile.module.css'


export function Profile({ username, tag, location, avatar, stats: {followers, views, likes}}) {
  return (
    <div className={css.profile}>
      <div className={css.description}> <img
          src={avatar}
          alt="User avatar"
          className={css.foto}
			 width="200px"
        />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={css.item}>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={css.item}>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

// Profile.protoType = {
//   name: PropTypes.string,
// };
