export interface BuildMakerPersonOptions {
  uuidv4: () => string;
  getAge: (birthdate: string) => number;
}

export const buildMakePerson = ({
  uuidv4,
  getAge,
}: BuildMakerPersonOptions) => {
  return ({ name, birthdate }: { name: string; birthdate: string }) => {
    return {
      id: uuidv4(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };
};
