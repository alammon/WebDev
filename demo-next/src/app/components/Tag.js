export default function Tag({ content = 'New', classNames = '' }) {
  return (
    <div
      className={`px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full text-mono ${classNames}`}
    >
      {content}
    </div>
  )
}
