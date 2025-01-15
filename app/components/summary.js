const Summary = () => {
    return (
        <div className="grid grid-cols-4 grid-rows-3 gap-y-5 gap-x-5 mx-28 my-48">
            {/* First element in Row 1, Column 1 */}
            <div className="p-12 rounded-3xl border-4 border-[#00FF00] shadow-lg shadow-[#00FF00]">
                <p className="text-9xl text-white nohemi-font">4</p>
                <p className="nohemi-light-font text-white font-thin text-3xl">DAYS</p>
            </div>

            {/* Second element in Row 1, Column 2 and Column 3 merged */}
            <div className="p-12 rounded-3xl border-4 border-[#00FF00] shadow-lg shadow-[#00FF00] col-span-2">
                <p className="text-9xl text-white nohemi-font">400+</p>
                <p className="nohemi-light-font text-white font-thin text-3xl">EVENTS</p>
            </div>

            {/* Third element in Row 1, Column 4 */}
            <div className="p-12 rounded-3xl border-4 border-[#00FF00] shadow-lg shadow-[#00FF00] row-span-2">
                <p className="text-[12rem] text-white nohemi-font">4</p>
                <p className="nohemi-light-font text-white font-thin text-4xl">PRO-SHOWS</p>
            </div>

            {/* Row 2, Column 1 */}
            <div className="p-12 rounded-3xl border-4 border-[#00FF00] shadow-lg shadow-[#00FF00]">
                <p className="text-6xl text-white nohemi-font my-6">VIBES</p>
                <p className="nohemi-light-font text-white font-thin text-3xl">TOP-NOTCH</p>
            </div>

            {/* Second element in Row 2, Column 2 and Column 3 */}
            <div className="p-4 col-span-2 flex justify-center items-center">
                <img src="/images/logo2.png" alt="Logo" className="border-4 border-[#00FF00] rounded-full w-[20rem] h-[20rem] shadow-lg shadow-[#00FF00]" />
            </div>





            {/* Row 3, Column 1 and 2 merged */}
            <div className="p-12 rounded-3xl border-4 border-[#00FF00] shadow-lg shadow-[#00FF00] col-span-3">
                <p className="text-[10rem] text-white nohemi-font">40,000+</p>
                <p className="nohemi-light-font text-white font-thin text-3xl">PARTICIPANTS</p>
            </div>

            {/* Row 3, Column 4 */}
            <div className="p-12 rounded-3xl border-4 border-[#00FF00] shadow-lg shadow-[#00FF00]">
                <p className="text-[7rem] text-white nohemi-font">FUN</p>
                <p className="nohemi-light-font text-white font-thin text-3xl">OFF THE CHARTS</p>
            </div>
        </div>
    );
};

export default Summary;
