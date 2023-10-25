import { About } from './views/about/About';
import { Initial } from './views/initial';

export default  function Home() {
  return (
    <main className="lg:px-10 p-2 max-w-[1920px] flex justify-center w-full">
      <div className="flex flex-col w-full">
        <Initial />
        <About />
      </div>
    </main>
  );
}
