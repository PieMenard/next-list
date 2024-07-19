import { List } from '@prisma/client';
import ListCard from './ListCard';

async function getListData() {
  const fetchList = await fetch('http://localhost:3000/api/list', {
    method: 'GET',
    cache: 'no-cache',
  });

  if (!fetchList.ok) {
    throw new Error('failed to fetch data');
  }

  const listData = await fetchList.json();
  return listData.data;
}

const ListShow = async () => {
  const listData = await getListData();
  return (
    <div className="flex flex-wrap gap-5 mt-6">
      {listData.map((list: List) => (
        <div key={list.id} className="mx-auto">
          <ListCard list={list} />
        </div>
      ))}
    </div>
  );
};

export default ListShow;
