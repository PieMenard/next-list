import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { List } from '@prisma/client';

const ListCard = ({ list }: { list: List }) => {
  return (
    <div>
      <Card className="w-[300px] h-auto bg-gray-950 text-white">
        <CardHeader>
          <CardTitle>{list.title}</CardTitle>
          <CardDescription>{list.description}</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex gap-2">
          <Button variant="secondary">Edit</Button>
          <Button variant="destructive">Delete</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ListCard;
