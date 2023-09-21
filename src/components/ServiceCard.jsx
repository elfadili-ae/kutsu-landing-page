const ServiceCard = ({ imgURL, label, subtext }) => {
    return (
        <div className="flex-1 sm:w-[350px] sm:min-w-[350px] shadow-3xl rounded-[20px]
        w-full px-10 py-16">
            <div className="w-11 h-11 flex justify-center items-center bg-red-600
            rounded-full">
                <img src={imgURL} alt={label} width={24} height={24} />
            </div>
            <h3 className="mt-5 text-3xl font-bold font-palanquin leading-none">
                {label}
            </h3>
            <p className="mt-5 leading-none text-slate-gray">{subtext}</p>
        </div>
    )
}

export default ServiceCard