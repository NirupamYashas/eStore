import './_cat-nav.scss';

const CatNav = () => {
    return(
        <>
        <div>
            <ul className='cat-nav-container container'>
                <li className='list-items'> <a href='#'> Men </a> </li>
                <li className='list-items'> <a href='#'> Women </a> </li>
                <li className='list-items'> <a href='#'> Kids </a> </li>
                <li className='list-items'> <a href='#'> Best Offers </a> </li>
            </ul>
        </div>
        </>
    )
}

export default CatNav;