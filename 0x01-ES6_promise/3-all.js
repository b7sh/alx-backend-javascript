import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((result) => {
      const [firstResult, lastReesult] = result;
      console.log(`${firstResult.body} ${lastReesult.firstName} ${lastReesult.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
