import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col ">
      <nav className=" flex justify-between items-center w-full p-2 mb-10  ">
        <img src={logo} alt="Zoko logo" className=" h-10 object-contain " />

        <button
          type="button"
          onClick={() =>
            window.open(
              "https://github.com/rumaniac/ZOKO_AiGPT_article_sumarrizer/tree/master"
            )
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text  ">
        Read in minutes <br className="max-md:hidden " />
        <span className="orange_gradient ">ZOKO- OpenAI</span>
      </h1>
    </header>
  );
};

export default Hero;
