import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface RowActionsProps {
  userId: string;
  onChangeStatus: (status: string) => void;
  isPending?: boolean;
}

export function RowActions({ onChangeStatus, isPending }: RowActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" disabled={isPending}>
          {isPending ? "Updating..." : "⋮"}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40">
        <DropdownMenuItem
          onClick={() => onChangeStatus("applied")}
          disabled={isPending}
        >
          Applied
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onChangeStatus("enrolled")}
          disabled={isPending}
        >
          Enrolled
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onChangeStatus("admitted")}
          disabled={isPending}
        >
          Admitted
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
