export const Logo = ({titleColor,titleShade, esloganColor, esloganShade,logoColor }: {titleColor: string, titleShade: string, esloganColor: string, esloganShade: string, logoColor: string}) => {
    return (
        <div className='flex gap-x-2 h-3/4'>
          <div className={`w-15 h-full ${logoColor} rounded-2xl`}>
            <img className='w-full h-full object-cover' src="/images/TechHaven-logo.png" alt="techHaven logo" />
          </div>
          <div>
            <h1 className={`text-${titleColor}-${titleShade} text-4xl font-extrabold font-montserrat`}>TechHaven</h1>
            <span className={`inline-block w-full text-${esloganColor}-${esloganShade} text-xs text-center font-nunito`}>PRICES ARE SKYROCKETING</span>
          </div>
        </div>
    )
}
export default Logo;