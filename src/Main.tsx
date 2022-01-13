import React from 'react';
import Masonry from '@mui/lab/Masonry';
import Stack from '@mui/material/Stack';
import './Style.css';

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
            return <div>Loading...</div>;
        } else {
            return (
                <Masonry columns={{xs: 1, sm: 3, md: 4, lg: 5}} spacing={1}>
                    {items.map((item, index) => (
                        <Stack key={index}>
                            {item.media_type === "image" &&
                                <img
                                    src={item.url}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{ borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}
                                />
                            }
                        </Stack>
                    ))}
                </Masonry>
            );
        }

    }
}