import { PageProps } from 'gatsby';
import { FC } from 'react';


const subcategory: FC<PageProps> = ({ pageContext }) => {
    console.debug('||pageContext: \n', pageContext);

    return (
        <main>
            HELLO
        </main>
    );
};


export default subcategory;
