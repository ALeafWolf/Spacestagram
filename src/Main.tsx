import React from 'react';
import Masonry from '@mui/lab/Masonry';
import CircularProgress from '@mui/material/CircularProgress';

import MediaCard from './MediaCard';

type Props = {};
type State = {
    error: any,
    isLoaded: boolean,
    items: any[],
    parameters: string
};

export default class Main extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            parameters: "?api_key=uTVAgYdTUgJaIi5XdGE4Dd2ku7uHTGqcnfyrfsl5&count=20&thumbs=true"
        }
    }

    componentDidMount() {
        fetch(`https://api.nasa.gov/planetary/apod${this.state.parameters}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render(): React.ReactNode {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <CircularProgress size={30} style={{ marginTop: "20%" }}></CircularProgress>

            );
        } else {
            return (
                <Masonry columns={{ xs: 1, sm: 3, md: 4 }} spacing={1}>
                    {items.map((item, index) => (
                        //TODO: Excluce 'other' media_type
                        <MediaCard
                            key={index}
                            mediaUrl={item.url}
                            mediaType={item.media_type}
                            title={item.title}
                            date={item.date}
                            description={item.explanation} />
                    ))}
                </Masonry>
            );
        }

    }
}