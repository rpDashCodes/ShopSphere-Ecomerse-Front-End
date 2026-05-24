import{useState} from "react";
function ImageGallery({images=[]}){
const [currentIndex, setIndex] = useState(0);
function nextImage(){
    setIndex((currentIndex+1)%images.length);
}
function prevImage(){
    if(currentIndex > 0){
        setIndex(currentIndex-1);
    }else{
        setIndex(images.length-1);
    }
}
function changeImage(index){
    setIndex(index)
}
    return(
        <div className="flex flex-col"> 
        <div className="relative">
            <img src={images[currentIndex]}/>
            <div className="opacity-5 hover:opacity-100 w-1/6 h-full bg-black/5  absolute left-0 top-0 flex justify-center hover:cursor-pointer transition-opacity ease-in-out duration-500" onClick={prevImage}>
               <svg viewBox="-19.04 0 75.803 75.803" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="4.54818"> <g id="Group_64" data-name="Group 64" transform="translate(-624.082 -383.588)"> <path id="Path_56" data-name="Path 56" d="M660.313,383.588a1.5,1.5,0,0,1,1.06,2.561l-33.556,33.56a2.528,2.528,0,0,0,0,3.564l33.556,33.558a1.5,1.5,0,0,1-2.121,2.121L625.7,425.394a5.527,5.527,0,0,1,0-7.807l33.556-33.559A1.5,1.5,0,0,1,660.313,383.588Z" fill="#000000"></path> </g> </g><g id="SVGRepo_iconCarrier"> <g id="Group_64" data-name="Group 64" transform="translate(-624.082 -383.588)"> <path id="Path_56" data-name="Path 56" d="M660.313,383.588a1.5,1.5,0,0,1,1.06,2.561l-33.556,33.56a2.528,2.528,0,0,0,0,3.564l33.556,33.558a1.5,1.5,0,0,1-2.121,2.121L625.7,425.394a5.527,5.527,0,0,1,0-7.807l33.556-33.559A1.5,1.5,0,0,1,660.313,383.588Z" fill="#000000"></path> </g> </g></svg>
            </div>
            <div className="opacity-5 hover:opacity-100 w-1/6 h-full bg-black/5  absolute right-0 top-0 flex justify-center hover:cursor-pointer transition-opacity ease-in-out duration-500" onClick={nextImage}>
            <svg viewBox="-19.04 0 75.804 75.804" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="5.003064"> <g id="Group_65" data-name="Group 65" transform="translate(-831.568 -384.448)"> <path id="Path_57" data-name="Path 57" d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z" fill="#000000"></path> </g> </g><g id="SVGRepo_iconCarrier"> <g id="Group_65" data-name="Group 65" transform="translate(-831.568 -384.448)"> <path id="Path_57" data-name="Path 57" d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z" fill="#000000"></path> </g> </g></svg>
            </div>
        </div>
            <div className="flex flex-row w-full m-auto overflow-scroll justify-center">
                {images.map((image,index)=>(<img key={index} src={images[index]} alt=""
                  className={`w-20 m-1 p-0.5 border-4 ${index === currentIndex ? 'border-blue-700':'border-gray-500'}`} onClick={()=>changeImage(index)}/> ))}
            </div>
        </div>
        
    )
} export default ImageGallery;