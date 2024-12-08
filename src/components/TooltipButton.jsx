

const TooltipButton = ({position="bottom",  colors = ['bg-red-700', 'bg-green-700', 'bg-blue-700']}) => {
    const positionClasses={
        bottom:{
            tooltip:'bottom-full left-1/2 transform -translate-x-1/2 mb-3',
            arrow:"left-1/2 transform -translate-x-1/2 -bottom-2 border-1"
        }
    }
    return (
        <div className="relative group">
        <button className="relative p-3 bg-white/25 border border-1 bg-white rounded-full text-xl">
          <div className={`hidden absolute  p-2 rounded-lg bg-white/25 shadow-md group-hover:flex space-x-1 ${positionClasses[position].tooltip}`}>

           {/* Colored dots */}
           {colors.map((color, index) => (
            <div key={index} className={`size-6 ${color} border border-white rounded-full`}></div>
          ))}
           

            {/* tooltip arrow */}
            <div className={`absolute ${positionClasses[position].arrow} w-0 h-0 border-l-transparent border-r-8 border-r-transparent border-t-8 border-white/35`}>

            </div>
          </div>
        </button>
      </div>
    );
};

export default TooltipButton;