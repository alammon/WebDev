function Navbar() {
    return (
      <nav className="flex justify-between bg-orange-100 p-5 items-center sticky top-0 shadow-lg">
        <div className="logo bg-white rounded-full p-5 hover:scale-105 transition-all cursor-pointer">
            <img className="object-cover w-10 h-10" src="images/Hammer.jpg" alt="Page logo"/>
        </div>
        <div className="flex gap-x-4 items-center">
          <a href="about.html"><Button title="About us" /></a>
          <Button title="Fences" />
          <Button title="Gates" />
        </div>
      </nav>
    );
  }
