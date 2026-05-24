export default function ProductInfo({moreInfo}){
     if (!moreInfo.dimensions) {
        return <div>Loading...</div>;
    }
   // Product Dimension: ×  × 
    return(
        <div>
            <table className="w-full border border-gray-300 border-collapse text-center">
                <thead className="bg-gray-300">
                    <tr><th colSpan={3} className="border border-gray-300 p-3 text-lg">Dimension</th></tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-100 font-semibold">
            <td className="border border-gray-300 p-2">
                Height
            </td>

            <td className="border border-gray-300 p-2">
                Width
            </td>

            <td className="border border-gray-300 p-2">
                Depth
            </td>
        </tr>

        <tr>
            <td className="border border-gray-300 p-2">
                {moreInfo.dimensions.height}
            </td>

            <td className="border border-gray-300 p-2">
                {moreInfo.dimensions.width}
            </td>

            <td className="border border-gray-300 p-2">
                {moreInfo.dimensions.depth}
            </td>
        </tr>
                </tbody>
            </table>
            <div className="font-bold mt-6 text-2xl">
                {moreInfo.warentyInfo}
            </div>
        </div>
    )

}