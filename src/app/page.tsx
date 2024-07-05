import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full w-full flex justify-center items-center gap-4">
      <Link href="/auth">Auth</Link>
      <Link href="/home">Home</Link>
      <Link href="/usernmae/todos">Todo</Link>
      <Link href="/usernmae/pomodoro">Pomodoro</Link>
    </div>
  );
}