import Link from "next/link";
import { Fragment } from "react";

function AttractionsPage() {
    return(
        <Fragment>
        <h1>Attractions Page</h1>
       <ul>
        <li>
            <Link href ="/attractions/check"> check </Link>
        </li>
        <li>
            <Link href ="/attractions/check2"> check 2 </Link>
        </li>
        <li>
            <Link href ="/attractions/check3"> check 3</Link>
        </li>
        <li>
            <Link href ="/attractions/check4"> check 4</Link>
        </li>
       </ul>
        </Fragment>
    )
 }

 export default AttractionsPage;
