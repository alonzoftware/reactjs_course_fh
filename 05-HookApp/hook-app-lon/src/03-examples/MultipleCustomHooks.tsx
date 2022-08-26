import { useCounter, useFetch } from "../hooks/";
import { LoadingQuote, Quote } from './';

interface iData {
    author: string,
    quote: string
}
export interface iUseFetchData {
    data: null | any,
    isLoading: boolean,
    hasError: any
}

export const MultipleCustomHooks = () => {


    const { counter, increment } = useCounter(1);


    const { data, isLoading, hasError } = useFetch('https://www.breakingbadapi.com/api/quotes/' + counter);
    // console.log({ data, isLoading, hasError });
    // const {author , quote} = !!data && data[0];
    let author = "";
    let quote = "";
    if (data) {

        author = (data[0] as iData).author;
        quote = (data[0] as iData).quote;
    }



    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading ? (
                    <LoadingQuote />
                ) :
                    <Quote quote={quote} author={author} />
            }

            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={() => increment(1)}>
                Next Quote
            </button>

        </>
    )
}
