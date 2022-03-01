import { Card } from 'react-bootstrap'
import { Navbar } from '../../components'
import Index from '../../Index'


const Home = () => {
    return (
    <>
        <Navbar />
        <div
            style={{ 
                    width: '100%',
                    minHeight: '100vh',
                    paddingTop: '10vh',
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection:'row'}}>
            { articles.map((post, key) => {
                return (
                    <Card key={key} style={{ width: '18rem', flexBasis: 'calc(50% - 40px)', margin: '20px' }} className='box'>
                        <Card.Img variant='top' src={post.urlToImage} />
                        <Card.Body>
                            <Card.Title>
                                { post.title }
                            </Card.Title>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>

    </>
    )
}

export default Home