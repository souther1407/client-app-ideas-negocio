import {
  Sheet as BaseSheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./base/Sheet";

function Sheet({
  renderButton,
  renderContent,
  renderFooter,
  title,
  description,
}) {
  return (
    <BaseSheet>
      <SheetTrigger asChild>{renderButton()}</SheetTrigger>
      <SheetContent className="bg-black/90 text-white">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">{renderContent()}</div>
        <SheetFooter>{renderFooter()}</SheetFooter>
      </SheetContent>
    </BaseSheet>
  );
}
export default Sheet;
