import { FaGithub } from 'react-icons/fa';
import Input from './Input';

const Header = () => {
  return (
    <header className="flex p-3 justify-between items-center w-full">
      <div>
        <div className="px-2 py-1 border-neutral-600 border-[0.3px] rounded-xl">
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="Search city"
          />
        </div>
      </div>
      <div className="w-5 px-5">
        <a
          href="https://github.com/elinoza"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </header>
  );
};
export default Header;
