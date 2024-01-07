import { useEffect, useState } from "react";

type User = {
  firstName: string;
  lastName: string;
};

const User = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("https://api.example.com/user")
      .then((res) => res.json())
      .then((user) => setUser(user));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>
        Hello, {user.firstName} {user.lastName}
      </h1>
    </div>
  );
};

export default User;
