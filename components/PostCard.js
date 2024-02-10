import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getUserById } from '../api/user';
// import { getCategoryById } from '../api/user';

export default function PostCard({ postObj }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserById(postObj.userId).then(setUser);
  }, []);

  return (
    <Card style={{ width: '50rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{postObj.title}</Card.Title>
        <Card.Text>{user?.firstName}</Card.Text>
        <Card.Text>{postObj.categoryId}</Card.Text>
        <Link href={`/post/${postObj.id}`} passHref>
          <Button>READ</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

PostCard.propTypes = {
  postObj: PropTypes.shape({
    title: PropTypes.string,
    userId: PropTypes.number,
    categoryId: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
};
