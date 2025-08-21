interface TagProps {
  children: React.ReactNode
}

export const Tag = ({ children }: TagProps) => {
  return (
    <span className="text-body-tag text-cyan-100 bg-cyan-200/40 rounded-2xl px-3 py-2">
      {children}
    </span>
  )
}
