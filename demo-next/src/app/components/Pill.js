export default function Pill({ info }) {
  return (
    <span className="bg-sky-200 py-2 px-4 rounded-full hover:bg-sky-300 transition-all cursor-pointer active:bg-indigo-300">
      {info}
    </span>
  )
}
