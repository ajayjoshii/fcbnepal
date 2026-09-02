// import { PastoralTeam } from "../constants/PastoralTeam"
// import PastoralTeams from "./PastoralTeam"

// function Pastoral() {
//     return (
//         <>
//             <h5 className="text-center pt-4">PASTORAL TEAM</h5>
//             <h1 className=' text-[#041a4f]  text-center font-bold text-4xl'>Serving the Church
//             </h1>
//             <p className="text-center p-4">Our pastoral team serves with humility, biblical conviction, and a heart for God's people.

//             </p>
//             <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:ml-10 ml-6 mr-6 md:mr-17 rounded-sm '>
//                 {
//                     PastoralTeam.map((proj) => (
//                         <PastoralTeams
//                             key={proj.id}
//                             image={proj.img}
//                             title={proj.position}
//                             name={proj.name}
//                             desc={proj.desc}
//                         />

//                     ))
//                 }
//             </div>
//         </>
//     )
// }

// export default Pastoral



import React, { useEffect, useState } from "react";
import PastoralTeams from "./PastoralTeam";
import { getLeaders } from "../api";

function Pastoral() {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getLeaders()
      .then((response) => {
        console.log("Leaders API:", response.data);

        // Django pagination
        setLeaders(response.data.results);

        setLoading(false);
      })
      .catch((error) => {
        console.log("Leaders Error:", error);

        setError("Failed to load leaders");
        setLoading(false);
      });
  }, []);

  // Loading
  if (loading) {
    return (
      <div className="text-center py-10">
        <p>Loading pastoral team...</p>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <>
      <h5 className="text-center pt-4">
        PASTORAL TEAM
      </h5>

      <h1 className="text-[#041a4f] text-center font-bold text-4xl">
        Serving the Church
      </h1>

      <p className="text-center p-4">
        Our pastoral team serves with humility, biblical conviction,
        and a heart for God's people.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:ml-10 ml-6 mr-6 md:mr-17 rounded-sm">

        {leaders.map((leader) => (
          <PastoralTeams
            key={leader.id}
            image={leader.image}
            title={leader.position_name}
            name={leader.name}
            desc={leader.about}
          />
        ))}

      </div>
    </>
  );
}

export default Pastoral;