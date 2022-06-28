
export function Home() {
    
    const opHeader = ["menu", "Historia", "Reservas"]


    return(
        <div className="w-full h-[100vh]">
            <div className="w-full bg-bannerHome bg-no-repeat h-[100vh]">
            <header className="w-full h-14 bg-navBanner flex justify-between">
                <div className="h-full w-auto flex ml-3">
                    <h1 className="my-auto text-3xl font-bold font-serif">Rama Food</h1>
                    <img src="./src/assets/logoRama.png" alt="Logo" className="h-full" />
                </div>
                <nav className="mr-20 float-right h-full w-auto min-w-[400px] ">
                    <ul className="flex w-auto justify-between h-full">
                        {opHeader.map(op =>(
                            <li className="text-black text-[18px] my-auto  ">
                                {op}
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            

            <img src="./src/assets/down.gif" alt="iconDown" className="mx-auto mt-[75vh] bottom-0 w-[100px] h-[100px]"/>
            </div> 
            <div className="w-full h-[100vh]">
                            <h1 className="mx-auto">Nossa Historia</h1>
            </div>
        </div>
    )
}