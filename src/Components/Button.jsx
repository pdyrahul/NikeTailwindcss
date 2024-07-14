
const Button = ({ label, iconUrl, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <button className={`flex items-center justify-center px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${fullWidth && 'w-full'}
    ${backgroundColor ?
        `${backgroundColor} ${textColor} ${borderColor}` : "bg-coral-red hover:bg-red-700 text-white border-coral-red"}`}>
      {label}
      {iconUrl && <img
        src={iconUrl}
        alt="arrow-right-icon"
        className="ml-2 rounded-full w-5 h-5" />}
    </button>
  )
}

export default Button