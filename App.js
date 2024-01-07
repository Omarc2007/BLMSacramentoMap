import './App.css';
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

function App() {
  useEffect(() => {
    Swal.fire({
      title: 'Welcome!',
      text: 'Click The Map To See Black Owned Businesses and BSU`s',
      icon: 'info',
      confirmButtonText: 'Alright'
    });
  }, []);
  return (
    <div className="container">
      
        <h1 className="headtitle">Black Lives Matter Sacramento Map</h1>
        <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        <section>
          <h3>Sacramento Rich History Of Black Lives</h3>
          <br />
          <br />
          <br />
        </section>
        <section className= "historycontainer">
          <p className="history">The African American presence in California traces back to the 18th century. As early as 1769, persons of African descent took part in Spanish military expeditions that occupied San Diego and Monterey. Settlers of mixed African-Mexican ancestry had been among the group that founded Los Angeles in 1781 and several held administrative positions in California during the late eighteenth and early 19th centuries. Others continued to settle in the Sacramento region throughout the early 19th century. In the 1830s, Black fur trader and entrepreneur James P. Beckwourth, via Missouri and Puebla, Colorado, made the first of several trips to the Sacramento region, utilizing a traditional Native American trail in the Sierra Nevada that became known to countless migrants to California as “Beckwourth Pass.” During the 1840s, William Alexander Leidesdorff, of Danish-African background, left the West Indies for Louisiana before settling in the village of Yerba Buena (now San Francisco), then part of Mexico, where he established a successful steamboat company, as well as the city’s first hotel. After becoming a Mexican citizen, Leidesdorff received a 35,0521-acre Mexican land grant on the south side of the American River. The land grant covered most of the land which later became the cities of Folsom and Rancho Cordova, directly to the east of Sacramento.2 In addition to his land grant, Leidesdorff eventually acquired much of the land in San Francisco’s present-day financial district, becoming one of the wealthiest men in California, the country’s first Black millionaire, first Black U.S. diplomat as vice-consul to Mexico, and first Black elected official when he became a San Francisco city councilman and city treasurer. Leidesdorff’s steamship “Sitka” appears on the California State Seal.3<a href="https://www.cityofsacramento.org/-/media/Corporate/Files/CDD/Planning/Urban-Design/Preservation/AAH/2023-06-29-Sacramento-AAE-Historic-Context-Statement-Final.pdf?la=en"> SACRAMENTO AFRICAN AMERICAN EXPERIENCE HISTORY PROJECT, June 2023</a></p>
        </section>
       <section className ="map">
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1YgM4mENEcHSE-rzZhVETZMNgXSgLjZU&ehbc=2E312F&noprof=1" width="740" height="580"></iframe>

        
       </section>

    </div>
  );
}

export default App;
