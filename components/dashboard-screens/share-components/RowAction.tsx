import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { RotateCw } from "lucide-react";

interface RowActionsProps {
  userId: string;
  onChangeStatus: (status: string) => void;
}

export function RowActions({ userId, onChangeStatus }: RowActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          ⋮
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40">
        <DropdownMenuItem onClick={() => onChangeStatus("applied")}>
          Applied
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onChangeStatus("enrolled")}>
          Enrolled
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onChangeStatus("admitted")}>
          Admitted
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
