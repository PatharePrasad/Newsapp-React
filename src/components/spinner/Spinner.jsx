import loading from '../../assets/loading.gif'

const Spinner = () => {
    return (
        <div className="text-center">
            <img src={ loading } alt="Loading" className="my-3" />
        </div>
    )
}

export default Spinner