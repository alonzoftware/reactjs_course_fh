import queryString from "query-string";
import { HeroCard } from "../components";
import { useForm } from '../../hooks/useForm';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

interface iFormState {
    searchText: string
}

export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);
    const { q = '' } = queryString.parse(location.search);



    const { formState, onInputChange, onResetForm } = useForm({ searchText: '' });
    const { searchText } = formState as iFormState;

    const onSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (searchText.trim().length <= 1) return;
        // console.log({ searchText });
        navigate(`?q=${searchText}`);
    }

    return (
        <>
            <h1>Search</h1>
            <hr />
            <div className="row">



                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>

                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className="btn btn-outline-primary mt-1">
                            Search
                        </button>
                    </form>



                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    <div className="alert alert-primary">
                        Search a hero

                    </div>
                    <div className="alert alert-danger">
                        No hero with <b>{q}</b>
                    </div>
                    {/* TODO: Implement HeroCard */}
                    {/* <HeroCard /> */}

                </div>
            </div>


        </>
    )
}
