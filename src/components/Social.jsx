import React, { useState } from "react";
import styled from "styled-components";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";

const Card = styled.div`
  width: 350px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin: 20px auto;
  font-family: Arial, sans-serif;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ProfilePic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Username = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

const PostContent = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: gray;

  &:hover {
    color: #007bff;
  }

  span {
    margin-left: 5px;
    font-size: 14px;
  }
`;

const SocialMediaCard = ({ profilePic, username, content }) => {
  const [likes, setLikes] = useState(0);

  return (
    <Card>
      <UserInfo>
        <ProfilePic src={profilePic} alt="Profile" />
        <Username>{username}</Username>
      </UserInfo>
      <PostContent>{content}</PostContent>
      <Actions>
        <ActionButton onClick={() => setLikes(likes + 1)}>
          <FaHeart /> <span>{likes}</span>
        </ActionButton>
        <ActionButton>
          <FaComment /> <span>Comment</span>
        </ActionButton>
        <ActionButton>
          <FaShare /> <span>Share</span>
        </ActionButton>
      </Actions>
    </Card>
  );
};

export default SocialMediaCard;
