

const StatusBadge = ({status}:{status:string}) => {
  return (
    <p className="px-2.5  py-0.5 rounded-lg border border-red-500 bg-red-500/20 text-red-600 text-sm">
        {status}
    </p>
  )
}

export default StatusBadge
