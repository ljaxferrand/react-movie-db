import { useEffect, useState } from 'react';
import Movies from '../components/Movies';
import SortNav from '../components/SortNav';
import HeroImage from '../components/HeroImage';
import { API_TOKEN } from '../globals/globals'

function PageHome() {


    return (
        <section className='home-page'>
            <HeroImage />
            <SortNav sort='popular' />
            <SortNav sort='upcoming' />
            <SortNav sort='top_rated' />
            <SortNav sort='now_playing' />
            
        </section>
    )
}

export default PageHome
