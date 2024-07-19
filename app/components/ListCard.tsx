'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { List } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ListCard = ({ list }: { list: List }) => {
  const router = useRouter();
  const [openListDialog, setOpenListDialog] = useState(false);
  const [editData, setEditData] = useState({
    title: list.title,
    description: list.description,
  });

  async function handleEdit() {
    try {
      const apiResponse = await fetch(`/api/list?id=${list.id}`, {
        method: 'PUT',
        body: JSON.stringify(editData),
      });
      const result = await apiResponse.json();
      setOpenListDialog(false);
      if (result.success) {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Card className="w-[300px] h-auto bg-gray-950 text-white">
        <CardHeader>
          <CardTitle>{list.title}</CardTitle>
          <CardDescription>{list.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-2">
          {/*Edit Button*/}
          <Button variant="secondary" onClick={() => setOpenListDialog(true)}>
            Edit
          </Button>
          {/*Dialog*/}
          <Dialog open={openListDialog}>
            <DialogContent className="sm:max-w-[425px] bg-gray-900">
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">
                    Title
                  </Label>
                  <Input
                    onChange={(e) =>
                      setEditData({ ...editData, title: e.target.value })
                    }
                    value={editData.title}
                    id="title"
                    className="col-span-3 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <textarea
                    onChange={(e) =>
                      setEditData({ ...editData, description: e.target.value })
                    }
                    value={editData.description}
                    id="description"
                    className="col-span-3 h-24 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleEdit}>
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          {/*Delete Button*/}
          <Button variant="destructive">Delete</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ListCard;
