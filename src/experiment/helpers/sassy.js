import { capitalize, randFromArray } from 'utils';

export default function(name) {
  name = capitalize(name);

  const sass = [
    `No one likes ${name}`,
    `Kicking ${name} out of the party`,
    `Goodbye, ${name}`,
    `Pack your stuff and get out, ${name}`,
    `Good riddance, ${name}`,
    `${name} was annoying everyone`,
    `I have 99 problems, but ${name} isn't one`
  ];

  return randFromArray(sass);
}