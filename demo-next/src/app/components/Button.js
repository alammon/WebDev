export default function Button({ href = null, children, classNamesProp = '' }) {
  const classNames = `px-6 py-4 bg-orange-50 hover:bg-orange-200 active:bg-orange-300 shadow-md transition-all cursor-pointer border-0 rounded-md ${classNamesProp}`
  return href ? (
    <a href={href} className={classNames}>
      {children}
    </a>
  ) : (
    <button className={classNames}>{children}</button>
  )
}
