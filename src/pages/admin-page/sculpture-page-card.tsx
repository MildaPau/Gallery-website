import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Sculpture } from '../../types';
import SculpturePageCardText from './sculpture-page-card-text';
import Img from './admin-page-card-img';

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
          <Button
            variant="outlined"
            sx={{
              minWidth: '40px',
              alignSelf: 'end',
              mt: 3,
            }}
            onClick={() => navigate(`/admin/sculptures/update/${id}`)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            sx={{
              minWidth: '40px',
              alignSelf: 'end',
              mt: 3,
            }}
            onClick={() => deleteItem(id)}
          >
            X
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default SculpturePageCard;
