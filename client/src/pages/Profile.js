import React, { useContext } from 'react';

// Create a UserContext to manage user data
const UserContext = React.createContext();

const UserProfile = () => {
  const user = useContext(UserContext);

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">User Profile</div>
        <p className="text-gray-700 text-base">
          <strong>Name:</strong> {user.name}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Location:</strong> {user.location}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Bio:</strong> {user.bio}
        </p>
      </div>
    </div>
  );
};

// Example usage of the UserProfile component with a UserContext.Provider
const Profile = () => {
  const user = {
    name: 'Baljit Singh',
    email: 'baljit@example.com',
    location: 'Arrah, Bihar',
    bio: 'MERN stack developer with a passion for hackathons and web development.',
  };

  return (
    <UserContext.Provider value={user}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <UserProfile />
      </div>
    </UserContext.Provider>
  );
};

export default Profile;
