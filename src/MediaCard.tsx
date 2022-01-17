import React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { getThemeProps } from '@mui/system';

type Props = {
    key: number,
    mediaUrl: string,
    mediaType: string,
    title: string,
    date: string,
    description: string
};

type States = {
    isLiked: boolean
};

export default class MediaCard extends React.Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isLiked: false,
        };
        this.toggleLike = this.toggleLike.bind(this);
    }

    toggleLike() {
        this.setState((state) => ({
            isLiked: !state.isLiked,
        }));
    }

    render(): React.ReactNode {
        return (
            <Card>
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
                <CardActions>
                    <IconButton aria-label="favourite" onClick={this.toggleLike}>
                        {!this.state.isLiked ?
                            <FavoriteBorderIcon color="primary"></FavoriteBorderIcon> :
                            <FavoriteIcon color="primary"></FavoriteIcon>
                        }
                    </IconButton>
                </CardActions>
            </Card>
        );
    }
}


