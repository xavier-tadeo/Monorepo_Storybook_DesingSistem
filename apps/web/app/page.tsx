import Link from "next/link";

const HomePage = async () => {

  return (
    <main className="p-8 bg-blue-500 h-screen">
      <h1 className="text-5xl font-bold mb-6 text-center text-yellow-500">Simpsons</h1>
      <div className="flex flex-col gap-4">
        <Link href="/characters" className=" w-fit text-2xl text-white hover:text-yellow-500"> - Characters -</Link>
        <Link href="/episodes" className=" w-fit text-2xl text-white hover:text-yellow-500"> - Episodes -</Link>
        <Link href="/locations" className=" w-fit text-2xl text-white hover:text-yellow-500"> - Locations -</Link>
      </div>
    </main>
  );
};

export default HomePage;
