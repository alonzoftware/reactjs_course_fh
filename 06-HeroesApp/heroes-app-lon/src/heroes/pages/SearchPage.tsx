import queryString from "query-string";
import { HeroCard } from "../components";
import { useForm } from '../../hooks/useForm';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { getHeroesByName } from '../helpers';
import { heroes } from '../data/heroes';

interface iFormState {
    searchText: string
}

export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);
    let { q = "" } = queryString.parse(location.search) as { q: string };
    const heroes = getHeroesByName(q);

    const showSearch = (q.length === 0);
    const showError = (q.length !== 0) && heroes.length === 0;

    // const { formState, onInputChange, onResetForm } = useForm({ searchText: '' });
    const { formState, onInputChange, onResetForm } = useForm({ searchText: q });
    const { searchText } = formState as iFormState;

    const onSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (searchText.trim().length <= 1) return;
        // console.log({ searchText });
        // navigate(`?q=${searchText}.toLowerCase().trim()`);
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
                    {
                        // (q === '')
                        //     ?
                        //     <div className="alert alert-primary">
                        //         Search a hero

                        //     </div>

                        //     : (heroes.length === 0) &&
                        //     <div className="alert alert-danger">
                        //         No hero with <b>{q}</b>
                        //     </div>
                    }


                    <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch ? '' : 'none' }}>
                        Search a hero
                    </div>

                    <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showError ? '' : 'none' }}>
                        No hero with <b>{q}</b>
                    </div>

                    {heroes.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                        // <li className='list-group-item d-flex justify-content-between' key={hero.id}>
                        //     <span aria-label="span">{hero.superhero}</span>
                        // </li>
                    )
                    )}

                </div>
            </div>


        </>
    )
}
