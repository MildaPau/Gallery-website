import {
  Alert,
  Box, Button, Container, Paper, Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingAnimation from '../../../components/loading/loading-animation';

import {
  createDeleteCardActionThunk, createfetchCardsActionThunk, cardsClearErrorAction,
} from '../../../store/action-creators';
import { useRootSelector, useRootDispatch } from '../../../store/hooks';
import { selectCards, selectCardsError, selectCardsLoading } from '../../../store/selectors';
import AdminAboutPageInfoCardPageCard from './admin-about-page-info-card';

const AdminAboutPageInfoCardsPage: React.FC = () => {
  const navigate = useNavigate();
  const cards = useRootSelector(selectCards);
  const cardsLoading = useRootSelector(selectCardsLoading);
  const error = useRootSelector(selectCardsError);
  const dispatch = useRootDispatch();

  useEffect(() => {
    dispatch(createfetchCardsActionThunk);
  }, []);

  let pageContent = (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 9 }}>
      <LoadingAnimation />
    </Box>
  );

  if (!cardsLoading) {
    pageContent = cards.length > 0 ? (
      <Box
        component="section"
        sx={{
          display: 'flex', gap: 5, mb: 6, flexWrap: 'wrap', justifyContent: 'center',
        }}
      >
        {cards.map((card) => (
          <Paper
            key={card.id}
            sx={{
              maxWidth: 250,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <AdminAboutPageInfoCardPageCard
              {...card}
              deleteItem={() => dispatch(createDeleteCardActionThunk(card.id))}
            />
          </Paper>
        ))}
      </Box>
    ) : <Typography component="h2" variant="h3" sx={{ my: 3 }}>No items, sorry.</Typography>;
  }

  return (
    <Container>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 5 }}>
        <Button
          variant="outlined"
          onClick={() => navigate('/admin/infoCard/create')}
        >
          Add new Card
        </Button>

        <Button
          onClick={() => navigate('/admin')}
          variant="outlined"
        >
          Back
        </Button>
      </Box>
      {error && (
        <Alert
          color="error"
          onClose={() => dispatch(cardsClearErrorAction)}
        >
          {error}
        </Alert>
      )}

      {pageContent}

    </Container>
  );
};

export default AdminAboutPageInfoCardsPage;
