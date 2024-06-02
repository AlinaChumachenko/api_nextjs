import Link from "next/link";
import Image from "next/image";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
];
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <div className="mr-10">
          <Image
            src="/MarilynManson.png"
            width={60}
            height={60}
            alt="MarilynManson"
          />
        </div>
      </div>

      <div className="flex items-center gap-10">
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path} className="hover:text-gray-300">
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
