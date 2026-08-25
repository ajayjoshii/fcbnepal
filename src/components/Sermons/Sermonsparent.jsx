import React from 'react'
import { Sermons } from '../../constants/Sermons'
import SermonsChild from './SermonsChild'

function Sermonsparent() {
    return (
        <div className='grid w-full text-center grid-cols-1 md:grid-cols-1 gap-6  mr-15 rounded-sm'>
         


            <div className='mx-3 md:mx-8 grid md:grid-cols-3 gap-5'>
                {
                    Sermons.map((proj) => (
                        <SermonsChild
                            key={proj.id}
                            images={proj.img}
                            names={proj.name}
                            subs={proj.sub}
                            pastors={proj.pastor}
                            buttons={proj.button}
                            
                        />

                    ))
                }

            </div>

        </div>
    )
}

export default Sermonsparent