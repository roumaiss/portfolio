import Link from "next/link";

export default function MainButton({ label }: { label: string }) {
  return (
    <Link
      href="/projects"
      className=" btn bg-[#FDC435] font-medieum text-xl font-roboto px-6 "
    >
      {label}
    </Link>
  );
}
