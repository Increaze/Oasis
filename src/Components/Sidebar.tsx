export const Sidebar = () => {
  return (
    <>
      <aside
        className="w-5/12 flex flex-col items-center relative h-full 
       bg-[url('https://images.unsplash.com/photo-1550510537-64a36484eae2')] bg-no-repeat bg-cover bg-bottom"
      >
        <div className="flex text-white w-[85%] pl-8 gap-x-3 text-xl mt-10 mb-36 ">
          <img src="/assets/oasis-logo.svg" alt="Oasis logo" />
          <p className="max-w-sm font-semibold text-base pt-2 text-white">
            Oasis
          </p>
        </div>
        <div className="inset-0">
          <img
            className="pl-96 mb-8"
            src="/public/assets/group.svg"
            alt="group"
          />
          <img className="pl-12 m-8" src="/assets/quote.svg" alt="" />
          <p className=" text-white pl-20 pr-14 text-xl font-normal">
            The passage experienced a surge in popularity during the 1960s when
            Letraset used it on their dry-transfer sheets, and again during the
            90s as desktop publishers bundled the text with their software.
          </p>
        </div>
        <div className="flex flex-row gap-x-2 w-full pl-20">
          <p className="text-white mt-2">Vincent obi </p>
          <img className="mt-2" src="/assets/verified.svg" alt="verified" />
        </div>
        <div className="flex flex-row w-full pr-20 mt-4 justify-end">
          <img src="/assets/square.svg" alt="square" />
        </div>

        <div className="flex w-full pt-24 justify-start">
          <img src="/assets/frame.svg" alt="" />
        </div>
      </aside>
    </>
  );
};
