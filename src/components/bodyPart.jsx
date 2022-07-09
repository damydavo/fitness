import Icon from './layout/assets/icons/gym.png'


const BodyPart = ({item}) => {
    return ( 
        <div className="flex card rounded-none shadow-md mx-6 w-48 h-48 items-center justify-center scrollbar-hide" type="button">
        <img className='w-8 h-8' src={Icon} alt="dumbell" />
        <div className="body">
        <h2 className="card-title mt-4">{item}</h2>

        </div>
        </div>
     );
}
 
export default BodyPart;