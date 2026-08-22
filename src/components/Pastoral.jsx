import { PastoralTeam } from "../constants/PastoralTeam"
import PastoralTeams from "./PastoralTeam"

function Pastoral() {
    return (
        <>
            <h5 className="text-center pt-4">PASTORAL TEAM</h5>
            <h1 className=' text-[#041a4f]  text-center font-bold text-4xl'>Serving the Church
            </h1>
            <p className="text-center p-4">Our pastoral team serves with humility, biblical conviction, and a heart for God's people.

            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 rounded-sm '>
                {
                    PastoralTeam.map((proj) => (
                        <PastoralTeams
                            key={proj.id}
                            image={proj.img}
                            title={proj.position}
                            name={proj.name}
                            desc={proj.desc}
                        />

                    ))
                }
            </div>
        </>
    )
}

export default Pastoral