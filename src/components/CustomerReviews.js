import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const CustomerReview = (data) => {
  const [currentPage, setCurrentPage] = useState(0);
  const tags = data.tags
  // Dummy data for reviews
  // const reviews = [
  //   { user: "Samrat Mukherjee", rating: 4, comment: 'Great artist! Amazing work, highly recommended! Good experience overall.', tags: ["black&white", "typography", "geometric"]   },
  //   { user: "Tejas Bannerjee", rating: 3, comment: 'Amazing work, highly recommended!', tags: ["black&white", "typography", "geometric"]},
  //   { user: "Pratyush Roy", rating: 5, comment: 'Good experience overall.', tags: ["black&white", "typography", "geometric"] },
  // ];
  const reviews = data.artistData

  const [currentRating, setCurrentRating] = useState(reviews[currentPage].rating);
  const [currentUser, setCurrentUser] = useState(reviews[currentPage].customerName);
  const currentReview = reviews[currentPage];

  const handleNext = () => {
    if (currentPage < reviews.length - 1) {
      setCurrentPage(currentPage + 1);
      setCurrentRating(reviews[currentPage + 1].rating);
      setCurrentUser(reviews[currentPage + 1].customerName)
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setCurrentRating(reviews[currentPage - 1].rating);
      setCurrentUser(reviews[currentPage - 1].customerName)
    }
    }

  return (
    <div style={{ height: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',border: '1px solid #ccc', padding: '10px', borderRadius: '6px', width: "285px" }}>
      <div>
        <Typography variant="h5" fontFamily="monospace" gutterBottom fontSize="20px" style={{ marginBottom: '8px' }}>
          {currentUser}
        </Typography>
        <Box display="flex" alignItems="center" style={{ marginBottom: '18px' }}>
          <Rating
            name="customized-color"
            value={currentRating}
            precision={0.5}
            icon={<FavoriteIcon fontSize="inherit" style={{ color: 'red' }} />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" style={{ color: 'red' }} />}
            readOnly
          />
        </Box>
        <Typography variant="body1" paragraph style={{ marginBottom: '30px' }}>
          {currentReview.review}
        </Typography>
        <Typography variant="body2" color="textSecondary">
            Tags: {tags.map(tag => `#${tag}`).join(' ')}
        </Typography>
      </div>
      <div>
        <Box display="flex" justifyContent="space-between">
          <Button variant="outlined" onClick={handlePrevious} disabled={currentPage === 0}>
            <NavigateBeforeIcon style={{ color: '#000' }} />
          </Button>
          <Button variant="outlined" onClick={handleNext} disabled={currentPage === reviews.length - 1}>
            <NavigateNextIcon style={{ color: '#000' }} />
          </Button>
        </Box>
      </div>
    </div>
  );
}
export default CustomerReview;
