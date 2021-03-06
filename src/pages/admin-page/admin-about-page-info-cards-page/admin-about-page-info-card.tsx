import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SculpturePageCardText from './admin-about-page-info-card-text';
import { Card } from '../../../types';
import Img from '../admin-page-card-img';
import ButtonScale from '../../../components/button-scale';

type InfoCardCardProps = Card & {
  deleteItem: (itemId: string) => void,
};

const AdminAboutPageInfoCardPageCard: React.FC<InfoCardCardProps> = ({
  id, image, deleteItem, ...AdminAboutPageInfoCardPageCardTextProps
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Img src={image} alt="Image" />
      <Box sx={{
        p: 3,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      >
        <SculpturePageCardText {...AdminAboutPageInfoCardPageCardTextProps} />
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'end' }}>
          <ButtonScale
            sx={{
              minWidth: '40px',
              alignSelf: 'end',
              mt: 3,
            }}
            onClick={() => navigate(`/admin/infoCard/update/${id}`)}
          >
            Edit
          </ButtonScale>
          <ButtonScale
            sx={{
              minWidth: '40px',
              alignSelf: 'end',
              mt: 3,
            }}
            onClick={() => deleteItem(id)}
          >
            X
          </ButtonScale>
        </Box>
      </Box>
    </>
  );
};
export default AdminAboutPageInfoCardPageCard;
