import React from "react";

const Header = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello! I'm Saira
          </h1>
          <p className="text-[#ADB&BE] text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            commodi, ratione animi debitis, recusandae, veritatis officiis
            dolores placeat facere quaerat fugit rerum non nam qui architecto
            nostrum dicta corporis! Incidunt!
          </p>
        </div>
      </div>
    </section>
  );
};
export default Header;
