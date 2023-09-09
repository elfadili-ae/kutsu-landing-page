const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeImg }) => {
    const clickHandle = () => {
        if (bigShoeImg != imgURL.bigShoe) {
            changeBigShoeImg(imgURL.bigShoe);
        }
    }
    return (
        <div
            className={`border-2 rounded-xl
        ${bigShoeImg === imgURL.bigShoe ? 'border-amber-800' : 'border-transparent'}
        cursor-pointer max-sm:flex-1`}
            onClick={clickHandle}>
            <div className="flex justify-center items-center bg-card bg-cover
            rounded-xl sm:w-40 sm:h-40 max-sm:p-4">
                <img
                    src={imgURL.thumbnail}
                    width={127}
                    height={103}
                    className="object-contain"
                />
            </div>
        </div>
    )
}

export default ShoeCard