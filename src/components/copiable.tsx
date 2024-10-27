import { toast } from 'sonner';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

function Copiable({
  children,
  addToClipboard,
}: {
  children: React.ReactNode;
  addToClipboard: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          asChild
          onClick={() => {
            navigator.clipboard.writeText(addToClipboard);
            toast('Añadido al portapapeles');
          }}
        >
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <span>Click para copiar</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
export default Copiable;
