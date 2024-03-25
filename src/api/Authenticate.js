const SignIn = async (payload) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(payload),
  };
  return await fetch(`/authenticate`, options)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

export const Authenticate = {
  SignIn,
};
