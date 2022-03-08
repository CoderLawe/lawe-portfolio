import Skill from "./Skill"

const Skills = () => {
    return(
        <div>
          <h1 className="ml-20 text-headerYellow text-4xl">Skills</h1>

          <div className="grid grid-cols-2 ml-20 mt-6 gap-y-6 mr-10 gap-x-4">
                <img className="bg-cover " src="https://cdn.discordapp.com/attachments/817048198022430761/950483294749884456/JavascriptLogo.png" alt="skill-logo"/>
                <img className="bg-cover " src="https://cdn.discordapp.com/attachments/817048198022430761/950483294946996344/djangoLogo.png" alt="skill-logo"/>
                <img className="bg-cover " src="https://cdn.discordapp.com/attachments/817048198022430761/950483295215448074/PythonLogo.png" alt="skill-logo"/>


                <img className="bg-cover " src="https://cdn.discordapp.com/attachments/817048198022430761/950483295416754216/nextJS_logo.png" alt="skill-logo"/>
                {/* <img className="bg-cover h-36 w-40" src="https://cdn.discordapp.com/attachments/817048198022430761/950483294749884456/JavascriptLogo.png" alt="skill-tailwind-logo"/> */}
                <img className="bg-cover " src="https://cdn.discordapp.com/attachments/817048198022430761/950483295987175434/ReactJSLogo.png" alt="skill-logo"/>

          </div>
        </div>
    )
}

export default Skills