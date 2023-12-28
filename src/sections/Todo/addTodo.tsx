import { useState } from "react";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";

interface Props {
  onAdd: (value: string) => void;
}

const AddTodo = ({ onAdd }: Props) => {
  const [value, setValue] = useState<string>("");

  const handleOnAdd = () => {
    onAdd(value);
  };

  return (
    <div className="flex gap-4">
      <Input
        placeholder="Add Todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleOnAdd();
          }
        }}
      />
      <Button onClick={handleOnAdd}>Add</Button>
    </div>
  );
};

export default AddTodo;
