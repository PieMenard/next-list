import ListBox from './components/ListBox';
import ListShow from './components/ListShow';

export default function Home() {
  return (
    <main className="flex flex-col w-8/12 mx-auto justify-between p-10">
      <ListBox />
      <ListShow />
    </main>
  );
}
