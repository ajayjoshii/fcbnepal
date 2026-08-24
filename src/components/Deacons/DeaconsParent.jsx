import React from 'react'
import { Deacons } from '../../constants/Deacon'
import DeaconsChild from './DeaconsChild'

function DeaconsParent() {
    return (
        <>
            <h1 className=' text-[#041a4f]  text-center font-bold text-4xl'>Deacon
            </h1>
            <p className="text-center p-4">Faithful servants helping care for the practical needs and ministry of our church family.



            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 ml-10 mr-15 rounded-sm '>
                {
                    Deacons.map((proj) => (
                        <DeaconsChild
                            key={proj.id}
                            images={proj.img}
                            titles={proj.position}
                            names={proj.name}
                            descs={proj.desc}
                        />

                    ))
                }
            </div>
        </>
    )
}

export default DeaconsParent