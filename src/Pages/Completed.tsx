function Completed(){
    return(
        <>
        <div
          className="w-full flex flex-col items-center relative h-screen
         bg-[url('https://bit.ly/3QbO0Ko')] bg-no-repeat bg-cover bg-blue-700"
        >
          <div className="flex text-white w-[85%] pl-8 gap-x-3 text-xl mt-10 mb-36">
            <img src="/assets/oasis-logo.svg" alt="Oasis logo" />
            <p className="max-w-sm font-semibold text-base pt-2 text-white">
              Oasis
            </p>
          </div>
          <div className="text-white items-center flex flex-col gap-y-4">
            <h1 className="text-7xl italic">Courtesy of the Frontend team</h1>
            <p className="text-3xl">Devlere-sama</p>
            <p className="text-3xl">Sodiq Alase</p>
            <p className="text-3xl">Osborne Tunde</p>
            <p className="text-3xl">Abel Olagoke </p>
            <p className="text-3xl">Nathan Jeetar</p>

          </div>
        </div>
          </>

    )
}
export default Completed;