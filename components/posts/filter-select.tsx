import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectOption {
  id: number;
  name: string;
}

interface FilterSelectProps {
  options: SelectOption[];
  value?: string;
  placeholder: string;
  emptyMessage: string;
  onValueChange: (value: string) => void;
  className?: string;
}

/**
 * FilterSelect component
 * Reusable select component for filtering
 *
 * Single Responsibility Principle:
 * - Only handles rendering a single select dropdown
 * - Parent components handle business logic
 */
export function FilterSelect({
  options,
  value,
  placeholder,
  emptyMessage,
  onValueChange,
  className,
}: FilterSelectProps) {
  const hasOptions = options.length > 0;

  return (
    <Select value={value || "all"} onValueChange={onValueChange}>
      <SelectTrigger disabled={!hasOptions} className={className}>
        {hasOptions ? <SelectValue placeholder={placeholder} /> : emptyMessage}
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">{placeholder}</SelectItem>
        {options.map((option) => (
          <SelectItem key={option.id} value={option.id.toString()}>
            {option.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
