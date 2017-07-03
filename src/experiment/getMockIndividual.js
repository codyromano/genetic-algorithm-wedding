import { rand, getID } from 'utils';

export default function() {
  const id = getID();

  return {
    id,
    name: `Guest ${id}`,
    image: 'placeholder.png',
    features: {
      politics: rand(0, 1),
      sports: rand(0, 1),
      humor: rand(0, 1)
    }
  };
};