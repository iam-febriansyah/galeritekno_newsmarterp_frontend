import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Link as RouteLinks,
    Routes,
    Route,
    useLocation,
} from 'react-router-dom'
import { RegionSelection, RegistrationForm } from '../components/RegistrationOnline'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { styled } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core'
import { Card, Stack, Link, Container, Typography, Button, Grid } from '@material-ui/core';

import { SmileOutlined } from '@ant-design/icons';

import { PoweroffOutlined } from '@ant-design/icons';


let routeIndex = parseInt(window.location.pathname.split('/').length == 3 ? window.location.pathname.split('/')[2] : 0);
function Content() {

    const location = useLocation()
    const [selectionState, setSelectionState] = useState([]);
    const timeout = { enter: 800, exit: 400 };
    const [loadings, setLoadings] = useState(0);
    const enterLoading = index => {

        setLoadings(({ loadings }) => {
            const newLoadings = [...loadings];
            newLoadings[index] = true;
            return {
                loadings: newLoadings,
            };
        });
        setTimeout(() => {
            setLoadings(({ loadings }) => {
                const newLoadings = [...loadings];
                newLoadings[index] = false;
                return {
                    loadings: newLoadings,
                };
            });
        }, 6000);
    };

    const RootStyle = styled('div')(({ theme }) => ({
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    }));

    const SectionStyle = styled(Card)(({ theme }) => ({
        width: '100%',
        maxWidth: 464,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: theme.spacing(2, 0, 2, 2)
    }));

    const ContentStyle = styled('div')(({ theme }) => ({
        maxWidth: 680,
        margin: 'auto',
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: theme.spacing(12, 0)
    }));
    return (
        <RootStyle title="Login | Minimal-UI">
            <SectionStyle>
                <Typography variant="h3" sx={{ px: 20, mt: 10, mb: 5 }}>
                    Lorem Ipsum
                </Typography>
                <Typography sx={{ color: 'text.secondary' }} variant="h5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Typography>
            </SectionStyle>

            <Container maxWidth="lg">
                <ContentStyle>
                    <Routes location={location}>
                        <Route exact path="/">
                            <Typography variant="h3" sx={{ px: 20, mt: 10, mb: 5 }}>
                                Welcome
                            </Typography>
                        </Route>
                        <Route exact path="/registration/1">
                            <RegionSelection selectionState={selectionState} setSelectionState={setSelectionState} />
                        </Route>
                        <Route exact path="/registration/2">
                            <RegistrationForm />
                        </Route>
                        <Route path='*'>
                            <div>Not Found</div>
                        </Route>
                    </Routes>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {(window.location.pathname !== "/" && window.location.pathname !== "/registration/1") &&
                            <RouteLinks to={`/registration/${routeIndex - 1}`}>
                                <Button onClick={() => routeIndex -= 1}>Previous</Button>
                            </RouteLinks>}
                        <RouteLinks style={{ justifySelf: 'flex-end' }} to={`/registration/${routeIndex + 1}`}> <Button onClick={() => routeIndex += 1}>Next</Button></RouteLinks>
                    </div>
                </ContentStyle>
            </Container>
        </RootStyle>
    )
}

export default function App() {
    return (

        <div className='fill'>
            <Content />
        </div>
    )
}