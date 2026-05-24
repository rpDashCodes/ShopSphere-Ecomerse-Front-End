export default function Review({current}){
    if(!current){
        return(
            <div>Loading...</div>
        )
    }
    return(
        <div className="bg-green-100 rounded-2xl mb-2.5 p-4">
            <div className="flex gap-6">
                <div className="text-xl font-semibold">{current.reviewerName}</div>
                <div className="font-semibold">{current.rating}⭐</div>
            </div>
            <div className="text-xs font-light">{current.reviewerEmail}</div>
            <div className=" font-semibold font-style: italic mt-1.5">{current.comment}</div>
        </div>
    )
}