//Seria a mesma coisa que se o tipo possua os mesmos requisitos
//ele não liga para o tipo
type User = {
  userName: string;
  password: string;
};

type VerifyUserFn = (user: User, sentValue: User) => boolean;

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.userName === sentValue.userName && user.password === sentValue.password
  );
};
const bdUser = { userName: "Joao", password: "123" };
const sentUser = { userName: "Joao", password: "123", permissions: "" };
console.log(verifyUser(bdUser, sentUser));
