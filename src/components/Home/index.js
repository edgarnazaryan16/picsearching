import { useEffect } from "react";
import { fetchData, setInputValue } from "../../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import "./style.css"
const Home = () => {
    const dispatch = useDispatch();
    const {data, inputValue, isLoading} = useSelector((state) => state.pictures)
    useEffect(() => {
        dispatch(fetchData(inputValue))
        dispatch(setInputValue('cat'))
    }, [])
    const handleInputChange = (event) => {
        dispatch(setInputValue(event.target.value))
    }
    const handleSearch = () => {
        dispatch(fetchData(inputValue))
    }
    return (
        <>
            <div className="Input">
                <input type="text" value={inputValue} onChange={(event) => handleInputChange(event)}/>
                <button onClick={handleSearch}>Search</button>
            </div>
            {
                isLoading ? <>Is Loading ...</> : 
                <div className="Pictures">
                    {
                        data ? data.map((item) => {
                            return (
                                    <img key={item.id} className="Image" src={item.links.download} alt="Must be picture"/>
                            )
                        }) : <>No Results Found</>
                    }
                </div>
            }   
        </>
    )
}
export default Home;