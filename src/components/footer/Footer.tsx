// import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
// import { useContext, type ReactNode } from "react";
// import { AuthContext } from "../../contexts/AuthContext";

const Footer = () => {
  const data = new Date().getFullYear();

//   const { usuario } = useContext(AuthContext);

  return <>
  
  <div className="flex justify-center bg-pink-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Farma Center Vitor Hugo | Copyright: {data}
          </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/vitor-hugo-silva-7b6b14220"
              target="_blank"
            >
              {/* <LinkedinLogoIcon size={48} weight="bold" /> */}
            </a>

            <a href="https://github.com/disturbedmoss" target="_blank">
              {/* <GithubLogoIcon size={48} weight="bold" /> */}
            </a>
          </div>
        </div>
      </div></>;
};

export default Footer;
