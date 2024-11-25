const toggler=document.querySelector(".menu-toggler"),wrapper=document.querySelector(".menu-wrapper"),header=document.querySelector("header"),body=document.querySelector("body"),links=document.querySelectorAll(".menu-link"),submenuLinks=document.querySelectorAll(".submenu-link"),cssClass={show:"show",menuShown:"menu-shown"},show=()=>{wrapper.classList.add(cssClass.show),toggler.setAttribute("aria-expanded",!0),header.classList.add(cssClass.menuShown),body.classList.add(cssClass.menuShown)},hide=()=>{wrapper.classList.remove(cssClass.show),toggler.setAttribute("aria-expanded",!1),header.classList.remove(cssClass.menuShown),body.classList.remove(cssClass.menuShown),hideAllSubmenus(),hideAllSecondarySubmenus()},handleClickOnToggler=()=>{if("false"===toggler.getAttribute("aria-expanded"))return wrapper.classList.add(cssClass.show),toggler.setAttribute("aria-expanded",!0),header.classList.add(cssClass.menuShown),void body.classList.add(cssClass.menuShown);hide()},handleOutsideClick=e=>{toggler.contains(e.target)||wrapper.contains(e.target)||hide()},hideSubmenu=(e,s)=>{e&&s&&(e.setAttribute("aria-expanded",!1),s.classList.remove(cssClass.show))},showSubmenu=(e,s)=>{e&&s&&(e.setAttribute("aria-expanded",!0),s.classList.add(cssClass.show))},hideAllSubmenus=()=>{const e=document.querySelectorAll(`.menu-item > .submenu.${cssClass.show}`),s=document.querySelectorAll('.menu-link[aria-expanded="true"]');for(let n=0;n<s.length;n++)hideSubmenu(s[n],e[n])},hideAllSecondarySubmenus=()=>{const e=document.querySelectorAll(`.submenu-item > .submenu.${cssClass.show}`),s=document.querySelectorAll('.submenu-link[aria-expanded="true"]');for(let n=0;n<s.length;n++)hideSubmenu(s[n],e[n])},handleLinkClick=e=>{const s=e.currentTarget,n=s.nextElementSibling;n&&(e.preventDefault(),"true"===s.getAttribute("aria-expanded")?hideSubmenu(s,n):(hideAllSubmenus(),hideAllSecondarySubmenus(),showSubmenu(s,n)))},handleSubmenuLinkClick=e=>{const s=e.currentTarget,n=s.nextElementSibling;n&&(e.preventDefault(),"true"===s.getAttribute("aria-expanded")?hideSubmenu(s,n):(hideAllSecondarySubmenus(),showSubmenu(s,n)))};document.addEventListener("click",(e=>{handleOutsideClick(e)})),toggler.addEventListener("click",handleClickOnToggler),links.forEach((e=>{e.addEventListener("click",handleLinkClick)})),submenuLinks.forEach((e=>{e.addEventListener("click",handleSubmenuLinkClick)}));