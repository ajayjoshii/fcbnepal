import React from 'react'

function PastoralTeams(props) {
    return (
        <div className="grid grid-cols-2 gap-2 md:ml-4 my-6 w-full max-w-160 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

            <div className="relative overflow-hidden ">
                <img
                    src={props.image}
                    alt={props.title}
                    className="h-92 w-full transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500" />
            </div>

            <div className="p-7">
                <h1 className="mb-3 text-xl relative top-62 right-80 rounded-sm w-55 px-7 py-2 font-semibold text-white text-center transition-all duration-300 bg-[#041a4f]">
                    {props.title}
                </h1>

                <h1 className="mb-3 text-2xl font-semibold text-[#041a4f] transition-all duration-300">
                    {props.name}
                </h1>

                <p className=" text-base text-justify leading-7 text-gray-600 transition-colors duration-300  md:text-sm">
                    {props.desc}
                </p>
            </div>

        </div>
    )
}

export default PastoralTeams