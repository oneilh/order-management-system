const Badge = ({status}:{status:string}) => {
if (!status) {
    return <p className="text-2xl font-bold text-gray-400">-</p>
}
  return (
    <p className="px-2 py-0.5 rounded-lg border border-red-500 bg-red-500/20 text-red-600 text-sm">
        Refunding
    </p>
  )
}

export default Badge
