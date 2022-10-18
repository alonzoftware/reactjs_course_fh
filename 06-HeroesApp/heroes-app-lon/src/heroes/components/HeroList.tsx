import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import { HeroCard } from './HeroCard';
export const HeroList = ({ publisher }: { publisher: string }) => {
    const heroes = getHeroesByPublisher(publisher);

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                heroes.map((hero) => (
                    <HeroCard key={hero.id} {...hero} />
                    // <li className='list-group-item d-flex justify-content-between' key={hero.id}>
                    //     <span aria-label="span">{hero.superhero}</span>
                    // </li>
                )
                )
            }

        </div>

    )



}