import React from 'react'
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import Form from './components/Form/Form.js'
import Posts from './components/Posts/Posts.js'
import memories from './images/memories.png'
import useStyles from './styles'

const App = () => {
    const classes = useStyles()
    return (
        <Container maxWidth='lg'> 
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>
                    Memories
                </Typography>
                <img className={classes.image} src={memories} alt='memorise' height='60'></img>
            </AppBar>
            <Grow in >
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={4}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App