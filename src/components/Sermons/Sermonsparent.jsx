// import React from 'react'
// import { Sermons } from '../../constants/Sermons'
// import SermonsChild from './SermonsChild'

// function Sermonsparent() {
//     return (
//         <div className='grid w-full text-center grid-cols-1 md:grid-cols-1 gap-6  mr-15 rounded-sm'>
        
//             <div className='mx-3 md:mx-8 grid md:grid-cols-3 gap-5'>
//                 {
//                     Sermons.map((proj) => (
//                         <SermonsChild
//                             key={proj.id}
//                             images={proj.img}
//                             names={proj.name}
//                             subs={proj.sub}
//                             pastors={proj.pastor}
//                             buttons={proj.button}
                            
//                         />

//                     ))
//                 }

//             </div>

//         </div>
//     )
// }

// export default Sermonsparent


import React, { useEffect, useState } from "react";
import SermonsChild from "./SermonsChild";
import { getSermons } from "../../api";

function Sermonsparent() {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getSermons()
      .then((response) => {
        console.log("Sermons API:", response.data);

        // Django pagination
        setSermons(response.data.results);

        setLoading(false);
      })
      .catch((error) => {
        console.log("Sermons Error:", error);

        setError("Failed to load sermons");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10">
        <p>Loading sermons...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 max-w-4xl">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="grid w-full text-center grid-cols-1 md:grid-cols-1 gap-6 mr-15 rounded-sm">

      <div className="mx-3 md:mx-8 grid grid-cols-1 md:grid-cols-2 gap-5">

        {sermons.map((sermon) => (
          <SermonsChild
            key={sermon.id}
            images={sermon.image}
            names={sermon.title}
            subs={sermon.description}
            pastors={sermon.pastor}
            buttons={sermon.button}
          />
        ))}

      </div>

    </div>
  );
}

export default Sermonsparent;