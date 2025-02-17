function Projects() {
  return (
    <section id="projects" className="projects">
      <div>
        <h1>Projects</h1>
        <p>
          An enthusiastic engineering student seeking a challenging position in
          a reputed organization where I can learn new skills, expand my
          knowledge, leverage my learnings, and contribute to the organization’s
          growth.
        </p>
      </div>

      <div className="project-container">
        <div className="project-row first">
          <div className="project-card">
            <div className="content">
              <i className="bi bi-briefcase"></i>
            </div>
            <div>
              <h4 className="title"><i class="fa-solid fa-cloud-sun"></i> Weather App</h4>
              <p className="description">
                Developed a dynamic Weather Application utilizing HTML, CSS,
                JavaScript and openWeather API.
              </p>
              <a href="https://naveenveera7.github.io/WeatherWise-Your-Global-Forecast-Hub/ ">
                View Page
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="icon">
              <i className="bi bi-card-checklist"></i>
            </div>
            <div>
              <h4 className="title"><i class="fa-solid fa-list-ul"></i> ToDo List App</h4>
              <p className="description">
                Developed a Responsive ToDo List Application utilizing ReactJS.
                It is used to add our daily tasks.
              </p>
              <a href="https://naveenveera7.github.io/ToDo-App/">View Page</a>
            </div>
          </div>

          <div className="project-card">
            <div className="content">
              <i className="bi bi-bar-chart"></i>
            </div>
            <div>
              <h4 className="title"><i class="fa-solid fa-calculator"></i> Currency Converter</h4>
              <p className="description">
                Developed a responsive Currency Converter app, it
             display curency value of one nation in comparison to
                another.
              </p>
              <a href="https://naveenveera7.github.io/currencyConverter/">
                View Page
              </a>
            </div>
          </div>
        </div>
        <div className="project-row">
          <div className="project-card">
            <div className="content">
              <i className="bi bi-binoculars"></i>
            </div>
            <div>
              <h4 className="title"><i class="fa-solid fa-building-columns"></i> Student Management System</h4>
              {/* <div className="overlay"> */}
              <p className="description">
                Developed a fullstack college management system with user validation and authentication.
              </p>
              <a href="https://github.com/naveenveera7/CollegeManagementSystem">
                View Page
              </a>
              {/* </div> */}
            </div>
          </div>

          <div className="project-card">
            <div className="content">
              <i className="bi bi-brightness-high"></i>
            </div>
            <div>
              <h4 className="title"><i class="fa-solid fa-gamepad"></i> Tic-Toe Game</h4>
              <p className="description">
                Developed a responsive Tic-Toe game using HTML, CSS, JS with color difference b/w players
              </p>
              <a href="https://naveenveera7.github.io/WeatherWise-Your-Global-Forecast-Hub/ ">
                View Page
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="content">
              <i className="bi bi-calendar4-week"></i>
            </div>
            <div>
              <h4 className="title"><i class="fa-brands fa-android"></i> Gemini Ai-Clone</h4>
              <p className="description">
                Designed a dynamic Gemini-Ai clone using HTML,CSS,JS and using Gemini Api and using local storage of js.
              </p>
              <a href="https://naveenveera7.github.io/WeatherWise-Your-Global-Forecast-Hub/ ">
                View Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projects;
