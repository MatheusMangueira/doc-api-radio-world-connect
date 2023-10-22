import { About } from '@/app/views/about/About';
import { Initial } from '@/app/views/initial/Initial';

export default function InitialPage() {
  return (
    <div className="flex flex-col w-full">
      <Initial />
      <About />
    </div>
  );
}
