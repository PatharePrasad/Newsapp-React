import { useState } from "react"
import { Navbar, Spinner } from "../../components"

const News = (props) => {
    const [loading, setLoading] = useState(true)
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <>
            <Navbar />
            <h1 
                className="text-center"
                style={{ margin: '30ps 0', paddingTop: "10vh" }}>
                News24 - Top { capitalizeFirstLetter(props.category) } Headlines
            </h1>
            { loading && <Spinner />}
        </>
    )
}

export default News
