"use client";

import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

const page = () => {
  return (
<>
<Header/>
<div className="text-lg flex flex-col gap-4 p-20">
    <h1  className="font-bold">YTS1 - Youtube Downloader - About Page</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel quam eros. Etiam nec maximus leo, quis mattis quam. Sed placerat dictum nulla imperdiet feugiat. Vivamus sed lobortis sapien, a sodales dui. Duis fermentum rhoncus eros, a elementum est maximus at. Sed elementum mauris lorem, ut molestie ipsum tristique et. Sed dictum tortor leo, et auctor urna vulputate ut. Curabitur porta ultrices tortor, id aliquet nulla lacinia non. Sed condimentum sem risus, nec rutrum purus elementum at. Nulla facilisi. Sed quis congue mauris. Proin accumsan ligula non purus aliquam, a fermentum nunc mattis. Quisque bibendum massa tellus, id ornare ipsum placerat vel. Vestibulum sed ipsum non turpis fermentum condimentum.</p>

<p>Fusce et efficitur ex. Aenean sagittis nulla at ante posuere, sit amet luctus massa suscipit. Aliquam eget interdum orci. Nulla dolor erat, tristique vel odio eu, pulvinar ullamcorper est.</p>
</div>
<Footer/>
</>
  )
}

export default page