type Props ={src: string,size: 'small' | 'medium' | 'large'}

const Avatar = ({src, size}:Props) => {
  const widthMap: Record<string, string>= {
  small: 'w-16',
  medium: 'w-32',
  large: 'w-64',
};
  return (
      <div className="avatar ">
              <div className={`${widthMap[size]} rounded-xl border border-black/30`}>
                <img src={src} />
              </div>
            </div>
  )
}

export default Avatar
