import React from 'react'

 const NewsItem = (props) => {
        let { title, description, imageurl, newsurl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
                    <span className="badge rounded-pill bg-danger">
                            {source}</span>
                    </div>
                
                            <img src={!imageurl ? "https://c.ndtvimg.com/2021-12/lnm11l2s_chinese-multi-role-j10c-fighter-jets-twitter_625x300_30_December_21.jpg" : imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>

        )
    
}

export default NewsItem
