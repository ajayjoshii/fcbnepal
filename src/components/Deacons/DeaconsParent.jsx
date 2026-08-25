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
            <div className='grid md:grid-cols-2 gap-6 md:ml-10 md:mr-15 ml-4 mr-4 rounded-sm '>
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