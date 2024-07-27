import './topbar.scss';
import {Person , Mail} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>Anasayfa</a>
          <div className="itemcontainer">
            <Person/>
            <span>551 699 38 61</span>
            <Mail/>
            <span>iremberber0@gmail.com</span>
          </div>
        </div>
        <h1>Hello</h1>
        <div className="right"> This is right</div>

      </div>
    </div>
  )
}
