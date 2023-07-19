import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';


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


function App() {
  // const [count, setCount] = useState(0)

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
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-6 col-lg-6 ' id="profile-section">
          <div className='profile-page'>
            <div className='user-name fw-bold h1'>Try Setyo Utomo</div>
            <div className='user-title h5'>Senior Frontend Engineer</div>
          </div>
          <div className='profile-menu'>
            <ul>
              <li>About</li>
              <li>Experiences</li>
              <li>Projects</li>
            </ul>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-6' id='content-section'>
          <div id='about'>
          Experienced Web Development since 2013

          1. Laravel, Code Igniter, CorelDraw : 5 years + 
          2. MySQL, PHP, Yii, CSS, HTML : 9 years + 
          3. Postgree, Delphi, Visual Studio, Phyton, Java, Phyton : 1 year
          4. Saas,React.js, Vue.js, Figma,Android : 3 years +
          5. Cordova, Framework 7 : 2 years
          6. Git : 4 years

          </div>
          <div id='experiences' className='mt-5 border-red '>
            <ul>
              <li>
                <b className='h5 fw-bold'>Senior Frontend Engineer</b>
                <p className='fw-normal'>Jan 2020 - Present · 3 yrs 7 mos</p>
                <p className='fw-light'>Singapore, Remote</p>
                <div className='list-stack-tech'> 
                  <span className="badge bg-success">React.js</span>
                  <span className="badge bg-success">Vue.js</span>
                  <span className="badge bg-success">JQuery</span>
                </div>
              </li>
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
