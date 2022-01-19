import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import DescriptionIcon from '@mui/icons-material/Description';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';
import { styled } from '@mui/material';

type Props = {
    key: number,
    mediaUrl: string,
    mediaType: string,
    title: string,
    date: string,
    description: string
};

type States = {
    isLiked: boolean,
    isModalOpen: boolean
};

export default class MediaCard extends React.Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isLiked: false,
            isModalOpen: false
        };
        this.toggleLike = this.toggleLike.bind(this);
        this.openModel = this.openModel.bind(this);
        this.closeModel = this.closeModel.bind(this);
    }

    toggleLike() {
        console.log('no');
        this.setState((state) => ({
            isLiked: !state.isLiked,
        }));
    }

    openModel() {
        console.log('yay');
        this.setState(() => ({
            isModalOpen: true,
        }));
    }

    closeModel() {
        this.setState(() => ({
            isModalOpen: false,
        }));
    }

    render(): React.ReactNode {
        return (
            <div>
                <Card>
                    <CardActionArea onClick={this.openModel}>
                        {this.props.mediaType === "image" ?
                            <CardMedia
                                component="img"
                                src={this.props.mediaUrl}
                                alt={this.props.title}
                            /> : <CardMedia
                                component="iframe"
                                src={this.props.mediaUrl}
                                allow="autoplay"
                            />}
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {this.props.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {this.props.date}
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="like" onClick={this.toggleLike}>
                            {!this.state.isLiked ?
                                <FavoriteBorderIcon color="primary"></FavoriteBorderIcon> :
                                <FavoriteIcon color="primary"></FavoriteIcon>
                            }
                        </IconButton>
                        <IconButton onClick={this.openModel}>
                            <DescriptionIcon color='primary' />
                        </IconButton>
                    </Box>
                </Card>
                <Modal
                    open={this.state.isModalOpen}
                    onClose={this.closeModel}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Card>
                        <ModalContainer>
                            <IconButton sx={closeModalBtn} onClick={this.closeModel}>
                                <ClearIcon color='primary' />
                            </IconButton>
                            {this.props.mediaType === "image" ?
                                <CardMedia
                                    component="img"
                                    src={this.props.mediaUrl}
                                    alt={this.props.title}
                                    sx={modalMedia}
                                /> : <CardMedia
                                    component="iframe"
                                    src={this.props.mediaUrl}
                                    allow="autoplay"
                                />}
                            <div>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    {this.props.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {this.props.date}
                                </Typography>
                                <Typography variant="body1" id="modal-modal-description" sx={{ mt: 2 }}>
                                    {this.props.description}
                                </Typography>
                            </div>
                        </ModalContainer>
                    </Card>
                </Modal>
            </div >
        );
    }
}

// custom styling
const ModalContainer = styled(Box)(({ theme }) => ({
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#ffffff',
    boxShadow: 24,
    display: 'grid',
    gap: '2%',
    [theme.breakpoints.up("sm")]: {
        padding: '4%',
        gridTemplateColumns: '50% 50%',
        width: '80vw',
        maxHeight: '70%',
    },
    [theme.breakpoints.down("sm")]: {
        padding: '2%',
        gridTemplateColumns: '100%',
        width: '95%',
        maxHeight: '100%',
    }
}));

const modalMedia = { 
    maxWidth: '100%', 
    maxHeight: '65vh', 
    width: 'auto' 
};

const closeModalBtn = {
    position: 'absolute',
    top: '0%',
    right: '0%'
};