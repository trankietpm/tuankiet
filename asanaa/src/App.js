import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLock, faGamepad, faGlobeAmericas, faBug, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

function App() {
  return (
    <div>
      <div className="start">
        <img src="./images/start.png" alt="Start" />
      </div>
      <div className="grid-container">
      <div className="profile">
                <img src="./images/2.png" alt="Profile" />
                <h1>Nora Tsunoda</h1>
                <h2>Security Lead</h2>
                <h3>Profile</h3>
                <p className="task">Tasks</p>
                <p className="task">Calendar</p>
                <p className="task">Files</p>
              </div>
              <div className="center">
                <div className="time">
                  <p className="topic">Nora spends most of their time on...</p>
                  <p className="product">
                    <FontAwesomeIcon icon={faPhone} />Product Infrastructure
                  </p>
                  <p className="network">
                    <FontAwesomeIcon icon={faLock} />Network Security
                  </p>
                  <p className="testing">
                    <FontAwesomeIcon icon={faGamepad} />Security Testing
                  </p>
                  <p className="audit">
                    <FontAwesomeIcon icon={faGlobeAmericas} />Security Audit Outsourcing
                  </p>
                  <p className="bug">
                    <FontAwesomeIcon icon={faBug} />Bug
                  </p>
                </div>
                <div className="works-most-with">
                  <p className="topic">Works most with:</p>
                  <ul>
                    <li>
                      <img src="./images/image1.png" alt="Joe A." />
                      <p>Joe A.</p>
                    </li>
                    <li>
                      <img src="./images/images2.png" alt="Dylan C." />
                      <p>Dylan C.</p>
                    </li>
                    <li>
                      <img src="./images/image3.png" alt="Ethan C." />
                      <p>Ethan C.</p>
                    </li>
                    <li>
                      <img src="./images/image4.png" alt="Louis W." />
                      <p>Louis W.</p>
                    </li>
                    <li>
                      <img src="./images/image5.png" alt="Jacob S." />
                      <p>Jacob S.</p>
                    </li>
                    <li>
                      <img src="./images/image6.png" alt="Julia G." />
                      <p>Julia G.</p>
                    </li>
                    <li>
                      <img src="./images/image7.png" alt="Katie U." />
                      <p>Katie U.</p>
                    </li>
                  </ul>
                </div>
                <div className="team">
                  <p className="topic">In these team...</p>
                  <img src="./images/team.png" alt="Team" />
                </div>
                <div className="recent">
                  <p className="topic">Recent activities</p>
                  <p>
                    <FontAwesomeIcon icon={faCheckCircle} />Completed <strong>May 2016 Patches Release</strong> in Security Update Release
                  </p>
                </div>
              </div>
              <div className="final">
                <div className="biography">
                  <p className="infor">BIOGRAPHY</p>
                  <p>Skateboarder, coffee addict, audiophile, Mad Men fan, and holistic designer. Performing at the sweet spot between art and sustainability to craft experiences that go beyond design.</p>
                  <p>Let's design a world that's thoughtful, considered, and aesthetically pleasing.</p>
                </div>
                <div className="location">
                  <p className="infor">LOCATION</p>
                  <p>Tokyo, Japan</p>
                </div>
                <div className="Direct">
                  <p className="infor">DIRECT RESPONSIBILITIES</p>
                  <div className="buttons">
                  <div className="button-group">
                    <button className="security">Security</button>
                    <button className="encryption">Encryption</button>
                  </div>
                  <div className="button-group">
                    <button className="keys">Keys and Secrets</button>
                  </div>
                </div>
                </div>
                <div className="request">
                  <p className="placeholder">
                    <input type="text" value="" placeholder="Request a task from Nora..." />
                  </p>
                  <img src="./images/6.png" alt="Request" />
                </div>
              </div>
            </div>
      </div>
              
  );
}

export default App;
