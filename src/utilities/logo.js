import logoDark from '../images/logo_light_blue_text.png';
import logoLight from '../images/logo_dark_blue_text.png';

const theme = (document.documentElement.className)
       let logo = '';

       if(theme === 'theme-dark') {
           logo = logoDark;
       } else if (theme === 'theme-light') {
           logo = logoLight;
       }



// export default logoSwap;