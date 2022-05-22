import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import AppsIcon from '@mui/icons-material/Apps';
import { IconButton } from '@mui/material';
import './SwipeButton.css';

const SwipeButton = () => {
    return (
        <div className='swipe-buttons y-axis-center'>
            <IconButton className="swipe-buttons_repeat">
                <ReplayIcon />
            </IconButton>
            <IconButton className="swipe-buttons_left">
                <CloseIcon />
            </IconButton>
            <IconButton className="swipe-buttons_star">
                <StarRateIcon />
            </IconButton>
            <IconButton className="swipe-buttons_right">
                <FavoriteIcon />
            </IconButton>
            <IconButton className="swipe-buttons_lightning">
                <FlashOnIcon />
            </IconButton>
        </div>
    )
}

export default SwipeButton;