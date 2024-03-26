const ByEmailAndPassword = async (payload) => {
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

const RefreshToken = async () => {
  const options = {
    method: "GET",
    credentials: "include",
  };

  return await fetch("/refresh", options)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => error);
};

export const Authenticate = {
  ByEmailAndPassword,
  RefreshToken,
};
