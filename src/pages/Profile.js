import React from 'react';
import styled from 'styled-components';
import UsedCoupon from '../components/Profile/UsedCoupon';

function Profile() {
  const usedCoupons = [
    {
      id: 'gomada',
      src: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
      title: '고마다',
      date: '2021.08.14 09:45',
    },
  ];

  return (
    <Body>
      <UsedCouponsBox>
        {usedCoupons.map(item => (
          <UsedCoupon
            key={item.id}
            id={item.id}
            src={item.src}
            title={item.title}
            date={item.date}
          />
        ))}
      </UsedCouponsBox>
    </Body>
  );
}
const Body = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme.bgColor};
`;

const UsedCouponsBox = styled.div`
  width: 90%;

  margin: 20px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: ${props => props.theme.borderPurple};
  border-radius: 20px;
`;

export default Profile;
