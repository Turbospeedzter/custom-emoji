import React from "react";

function Footer() {

    const copyrightDate = new Date().getFullYear();

return (
<footer>
<p className="footer"> 
 Copyright © {copyrightDate} Cosmic Thump Games
   </p>
   </footer>
);
}

export default Footer;