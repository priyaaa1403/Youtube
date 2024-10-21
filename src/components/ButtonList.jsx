const ButtonList = () =>{

    const categories = [
        'All', 'Music', 'Mixes', 'Drama', 'News','Comedy', 'Superfood', 
        'Self-confidence', 'Fitness', 'Diet', 'Study', 'Meditation', 'Mindful', 
        'Retro', 'Recently uploaded', 'Indian pop music', 'Horror', 'Mythology',"Mysteries","Pyramids of Egypt", 'New to you'
    ];
    return (
       <div className=" fixed w-10/12 overflow-x-auto   flex whitespace-nowrap   pl-4 pr-5 py-2  scrollbar-hide font-medium bg-white ">
       
            {
                categories.map((item,index)=><h1 key={index} className="mr-6 bg-gray-100 text-sm font-medium p-2 rounded-lg ">{item}</h1>)
            }
       </div> 
    ) 
}
export default ButtonList;