import BodyPart from './bodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

const HorizontalScrollBar = ({ data }) => {
    return ( 
    <ScrollMenu>
          { data.map(item => {
            return (
                <BodyPart key={item.id || item} item={item} />
            )
          }) }
          

        </ScrollMenu>

     );
     
     
}
 
export default HorizontalScrollBar;