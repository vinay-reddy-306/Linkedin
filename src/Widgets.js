import { FiberManualRecord, Info } from '@material-ui/icons'
import React from 'react'
import './Widgets.css'

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets_article'>
            <div className='widgets_articleLeft'>
                <FiberManualRecord/>
            </div>
            <div className='widgets_articleRight'>
                <h4>{heading}</h4>
                <p>{ subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className='widgets'>
            <div className='widgets_header'>
                <h2>LinkedIn news</h2>
                <Info/>
            </div>
            {newsArticle('First article is ready', 'Top news - 9099 readers')}
            {newsArticle('second article is ready','Top news - 9099 readers')}
            {newsArticle('Third article is ready','Top news - 9099 readers')}
            {newsArticle('Fourth article is ready','Top news - 9099 readers')}
            {newsArticle('Fifth article is ready','Top news - 9099 readers')}
        </div>
    )
}

export default Widgets
