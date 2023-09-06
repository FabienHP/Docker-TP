import {useEffect, useState} from "react";
import {Box, Button, Container, Paper, Stack, TextField, Typography} from "@mui/material";
import axios from "axios";

function App() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [postsList, setPostslist] = useState(null);

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (!title || !content) {
            return;
        }

        axios.post(process.env.REACT_APP_SERVER_URL + "/posts", {
            "title": title,
            "content": content
        })
            .then(() => getAllPosts())
            .catch(err => console.error(err));
    };

    const getAllPosts = () => {
        axios.get(process.env.REACT_APP_SERVER_URL + "/posts")
            .then(res => setPostslist(res.data))
            .catch(err => console.error(err));
    };

    const deleteOnePost = (id) => {
        axios.delete(process.env.REACT_APP_SERVER_URL + "/posts/" + id)
            .then(() => getAllPosts())
            .catch(err => console.error(err));
    };

    useEffect(() => {
        getAllPosts();
    }, []);

    return (
        <Container>
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
                onSubmit={onFormSubmit}
            >
                <TextField
                    label="Title"
                    placeholder="Example of title post"
                    value={title}
                    error={!title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <TextField
                    label="Description"
                    placeholder="Example of post content"
                    value={content}
                    error={!content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <Button type="submit" variant="contained">Create</Button>
            </form>

            <Stack direction="column" spacing={2} padding={4}>
                <Button onClick={getAllPosts} variant="outlined" style={{marginTop: '10px'}}>Refresh Posts</Button>
                {postsList && postsList.map(data => (
                    <Paper key={data._id} elevation={3} sx={{padding: 2}}>
                        <Stack direction="row">
                            <Box sx={{flex: 1}}>
                                <Typography variant="h5">{data.title}</Typography>
                                <Typography variant="body1">{data.content}</Typography>
                            </Box>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center"
                            }}>
                                <Button
                                    onClick={() => deleteOnePost(data._id)}
                                    variant="contained"
                                    color="error"
                                >
                                    Delete
                                </Button>
                            </Box>
                        </Stack>
                    </Paper>
                ))}
            </Stack>
        </Container>
    );
}

export default App;
