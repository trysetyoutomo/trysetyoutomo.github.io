import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.scss';


// Import all of Bootstrap's JS
// The Button from the last section without the interpolations


// Create a Title component that'll render an <h1> tag with some styles
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: #BF4F74;
// `;

// // Create a Wrapper component that'll render a <section> tag with some styles
// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;


interface Person {
  name: string;
  age: number;
}

function App() {

  
  let [listExps, setExperience] = useState([
    {
        title : "Senior Frontend Engineer - IdentitiCoders Pte Ltd",
        periode : "Jan 2020 - Present · 3 yrs 7 mos",
        location : "Bandung",
        stacks : ["React.js", "Vue.js"]
    },
    {
      title : "Senior Software Engineer - PT Tower bersama",
      periode : "Jan 2020 - Present · 3 yrs 7 mos",
      location : "Bandung",
      stacks : ["React.js", "Vue.js",                                "php", "framework7","Code Igniter"," Laravel"]
    },
    {
      title : " PT ValueStream Internaison",
      periode : "Sept 2007  - Feb 2019",
      location : "Bandung",
      stacks : ["React.js", "Vue.js", "php", "framework7","Code Igniter"," Laravel"]
    },
    {
      title : " VVFY",
      periode : "Feb 2015  - July 2017",
      location : "Bandung",
      stacks : ["React.js", "Vue.js", "php", "yii"]
    }
  ]);

  // setExperience({ ...listExps, {
  //   title : "Senior Frontend Engineer",
  //   periode : "29 Januari 2023 - 31 Januari 2024",
  //   location : "Bandung",
  //   techStacks : ["React.js", "Vue.js"]
  // }});

  // useState
  // setState(
  //   listExps => ({
  //     ...listExps,
  //     title : "Senior Frontend Engineer",
  //     periode : "29 Januari 2023 - 31 Januari 2024",
  //     location : "Bandung",
  //     techStacks : ["React.js", "Vue.js"]
  //   })
  // )
  // console.log(listExps);


  // React.useEffect(function(){
  //   alert('123');
  // },[]);

  return (
    <>
  {/* <Wrapper>
    <Title> 
      Hello World!
    </Title>
  </Wrapper> */}
  <div className='row'>
    <div id='header'>
       <div className='container grid-container'>
        <div className='row'>
        <div className='profile-page'>
            <div className='user-name fw-bold h1'>Try Setyo Utomo</div>
            <div className='user-title h5'>Senior Frontend Engineer</div>
          </div>
        </div>
       </div>
    </div>
  </div>
    <div className='container'>
      <div  className='row'>
        <div className='col-12 col-md-6 col-lg-4 ' id="profile-section">
  
          <div className='profile-menu'>
            <ul>
              <li><a href='#about'>About</a></li>
              <li><a href='#experiences'>Experiences</a></li>
              <li><a href='#awards'>Awards</a></li>
              <li><a href='#projects'>Projects</a></li>
            </ul>
          </div>
        </div>
        <div id='content-section' data-bs-spy="scroll" data-bs-targe ="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="col-12 col-md-6 col-lg-8 scrollspy-example bg-body-tertiary p-3 rounded-2 row" tabIndex="0">
          <div id='about'>
          Experienced Web Development since 2013, pasionate with Programming world, active person that and eager to know latest technology of the Web. 

          </div>
          <div id='experiences' className='mt-5 border-red '>
            <ul>
            {listExps.map((item) => (
              <li className='experince'>
                <i className="bi bi-0-circle"></i>
                <b className='h5 fw-bold'>{item.title}</b>
                <p className='fw-normal'>{item.periode}</p>
                <p className='fw-light'>{item.location}</p>
                <div className='list-stack-tech'>
                  {item.stacks.map((stack)=> (
                    <span className="badge bg-success">{stack}</span>
                  ))} 
                </div>
              </li>
            ))}

            </ul>
          </div>
          <div id='projects'>
          </div>
        </div>

        
      </div>
      
    </div>
    </>
  )
}

export default App
