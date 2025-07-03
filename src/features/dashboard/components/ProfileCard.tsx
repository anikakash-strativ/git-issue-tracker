import { Avatar } from 'antd';

import {
  StyledProfileCard,
  ProfileInfo,
  Username,
  UserBio,
  UserInfo,
} from '@/features/dashboard/styles/profileCardGithub-styles';
import type { GitUserData } from '@/services/gitService';

interface ProfileCardType {
  userData: GitUserData;
  username: string;
}

function ProfileCard({ userData, username }: ProfileCardType) {
  return (
    <>
      <StyledProfileCard>
        <ProfileInfo>
          <Avatar size={64} src={userData.avatar_url} />
          <UserInfo>
            <Username>{userData.name}</Username>
            <UserBio>@{username}</UserBio>
            <UserBio>{userData?.bio}</UserBio>
          </UserInfo>
        </ProfileInfo>
        <ProfileInfo>
          <UserInfo style={{ textAlign: 'center' }}>
            <Username>{userData?.followers}</Username>
            <UserBio>Followers</UserBio>
          </UserInfo>
          <UserInfo style={{ textAlign: 'center' }}>
            <Username>{userData?.following}</Username>
            <UserBio>Followers</UserBio>
          </UserInfo>
        </ProfileInfo>
      </StyledProfileCard>
    </>
  );
}

export default ProfileCard;
