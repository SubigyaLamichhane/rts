import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Micheal', age: 20 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [guest, setGuest] = useState<
    { name: string; age: number } | undefined
  >();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setGuest(foundUser);
  };

  return (
    <div>
      <h3>Guest Search </h3>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find Guest</button>
      <div>
        {guest && guest.name}
        {guest && guest.age}
      </div>
    </div>
  );
};

export default UserSearch;
