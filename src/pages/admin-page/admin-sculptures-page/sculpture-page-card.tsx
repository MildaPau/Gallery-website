import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Sculpture } from '../../../types';
import SculpturePageCardText from './sculpture-page-card-text';
import Img from '../admin-page-card-img';
import ButtonScale from '../../../components/button-scale';

type SculptureCardProps = Sculpture & {
  deleteItem: (itemId: string) => void,
};

const SculpturePageCard: React.FC<SculptureCardProps> = ({
  id, image, deleteItem, ...SculpturePageCardTextProps
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
        <SculpturePageCardText {...SculpturePageCardTextProps} />
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'end' }}>
          <ButtonScale
            sx={{
              minWidth: '40px',
              alignSelf: 'end',
              mt: 3,
            }}
            onClick={() => navigate(`/admin/sculptures/update/${id}`)}
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
export default SculpturePageCard;
