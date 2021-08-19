import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from './Paper.js'
import ArticlesArray from './ArticlesArray.js'

const Articles = () => {
    return (
        <>
            {ArticlesArray.map((article) => (
                <Grid
                    item
                    xs={12}
                    sm={4}
                    md={4}
                    key={article.id}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Paper
                        image={article.image}
                        date={article.date}
                        name={article.name}
                    />
                </Grid>
            ))}
        </>
    )
}

export default Articles
