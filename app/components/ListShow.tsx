import { List } from '@prisma/client';

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
    <div>
      {listData.map((list: List) => (
        <div key={list.id}>{list.title}</div>
      ))}
    </div>
  );
};

export default ListShow;
