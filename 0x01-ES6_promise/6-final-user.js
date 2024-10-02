import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => {
      result.map((res) => {
        if (res.status === 'fulfilled') {
          return {
            status: 'fulfilled',
            value: res.value,
          };
        }
        return {
          status: 'rejected',
          value: String(res.reason),
        };
      });
    });
}
