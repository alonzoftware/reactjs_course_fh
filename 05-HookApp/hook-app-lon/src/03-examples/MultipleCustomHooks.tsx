import { useFetch } from "../hooks/useFetch"

interface iData {
    author: string,
    quote: string
}

export const MultipleCustomHooks = () => {
    const { data, isLoading, hasError } = useFetch('https://www.breakingbadapi.com/api/quotes/1');
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
                    <div className="alert alert-info text-center">
                        Loading ...
                    </div>
                ) :
                    <blockquote className="blockquote text-end">
                        <p className="mb-1"> {quote}</p>
                        <footer className="blockquote-footer">{author}</footer>


                    </blockquote>
            }



        </>
    )
}
