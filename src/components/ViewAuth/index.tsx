import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import Search from '../Search';
import { Text, Button } from '@chakra-ui/react';
import './style.css';

interface AuthViewProps {
  user?: string;
  searchInput: string;
  handleChange: ChangeEventHandler;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
  handleLogout: MouseEventHandler<HTMLButtonElement>;
}

const ViewAuth = ({
  handleChange,
  handleSubmit,
  handleLogout,
  user,
  searchInput,
}: AuthViewProps) => {
  return (
    <div>
      <div className="search-container">
        <Text fontSize="4xl" fontWeight="bold" textAlign="center" flex="1">
          Hello {user}, Listening your favorit musics!
        </Text>
        <Button
          colorScheme="purple"
          size="lg"
          height="50px"
          width="120px"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>

      <Search
        handleChange={handleChange}
        handleSubmitIcon={handleSubmit}
        handleSubmit={handleSubmit}
        searchInput={searchInput}
      />
    </div>
  );
};

export default ViewAuth;