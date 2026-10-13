(() => {
 const root=new URL('.',document.currentScript.src);
 let lang=new URL(location.href).searchParams.get('lang');
 if(!['az','en'].includes(lang)){try{lang=localStorage.getItem('ege-language')}catch{}}
 window.siteLanguage=lang==='en'?'en':'az';document.documentElement.lang=window.siteLanguage;
 try{localStorage.setItem('ege-language',window.siteLanguage)}catch{}
 const dict={
 'Haqqımızda':'About us','HAQQIMIZDA':'ABOUT US','Robotik cərrahiyyə nədir?':'What is robotic surgery?',
 'Xidmətlərimiz':'Our services','Həkimlərimiz':'Our doctors','Pasiyent rəyləri':'Patient testimonials','PASİYENT RƏYLƏRİ':'PATIENT TESTIMONIALS',
 'Bizimlə əlaqə':'Contact us','BİZİMLƏ ƏLAQƏ':'CONTACT US','Bloq':'Blog','BLOQ':'BLOG','Ana səhifə':'Home',
 'Ege Hospital Robotik Cərrahiyyə Mərkəzi':'Ege Hospital Robotic Surgery Centre','EGE Robotik Cərrahiyyə Mərkəzi':'EGE Robotic Surgery Centre',
 'EGE Robotik Cərrahiyyə':'EGE Robotic Surgery','ROBOTİK CƏRRAHİYYƏ':'ROBOTIC SURGERY','İSTİQAMƏTLƏR':'SPECIALTIES','KOMANDA':'TEAM',
 'Cərrahiyyədə':'In surgery,','yeni dövr':'a new era','Cərrahiyyədə yeni dövr.':'A new era in surgery.',
 'İnsan təcrübəsi və texnologiyanın dəqiqliyi.':'Human expertise and technological precision.',
 'İnsan təcrübəsi.':'Human expertise.','Texnologiyanın dəqiqliyi.':'Technological precision.','İNSAN TƏCRÜBƏSİ.':'HUMAN EXPERTISE.','TEXNOLOGİYANIN DƏQİQLİYİ.':'TECHNOLOGICAL PRECISION.',
 'Hər hərəkətdə dəqiqlik.':'Precision in every movement.','Keç':'Skip','Ətraflı tanış olun':'Explore further','Daha ətraflı':'Learn more',
 'Müasir cərrahiyyənin imkanlarını qabaqcıl robotik texnologiya ilə birləşdiririk.':'We combine the capabilities of modern surgery with advanced robotic technology.',
 'Robotik sistem cərrahın nəzarəti ilə işləyir. Onun təcrübəsini dəqiq alətlər və üçölçülü görüntüləmə tamamlayır. Hər pasiyentə yanaşma fərdi şəkildə müəyyən edilir.':'The robotic system works under the surgeon’s control. Precise instruments and three-dimensional imaging complement their experience. The approach to each patient is determined individually.',
 'Ünvan':'Address','Telefon':'Phone','E-poçt':'Email','Zəng edin':'Call us','Zəng et':'Call','WhatsApp-da yazın':'Message us on WhatsApp','Xəritədə aç':'Open in Maps',
 'Akademik Həsən Əliyev küçəsi 38, AZ1078 Bakı, Azərbaycan':'38 Akademik Hasan Aliyev Street, AZ1078 Baku, Azerbaijan',
 'Mərkəz':'Centre','Məlumatlar həkim konsultasiyasını əvəz etmir.':'This information does not replace a consultation with a doctor.',
 'Bütün xidmətlər':'All services','Bütün həkimlər':'All doctors','Əsas məzmuna keç':'Skip to main content','Səhifə yolu':'Breadcrumb',
 'Əsas menyu':'Main navigation','Menyunu aç':'Open menu','Menyunu bağla':'Close menu','Dil seçimi':'Language selection',
 'Fon videosunu oynat':'Play background video','Fon videosunu dayandır':'Pause background video','Videonu bağla':'Close video',
 'EGE Hospitalda robotik cərrahiyyə':'Robotic surgery at EGE Hospital','Video EGE Hospitalın rəsmi YouTube kanalında yayımlanıb.':'The video was published on EGE Hospital’s official YouTube channel.',
 'EGE Hospital — robotik cərrahiyyə haqqında video':'EGE Hospital — video about robotic surgery','Video açılmırsa, YouTube-da izləyin':'If the video does not load, watch on YouTube',
 'WhatsApp-da bizə yazın':'Message us on WhatsApp','5 ulduz':'5 stars','Sosial media':'Social media','EGE Robotik Cərrahiyyə — ana səhifə':'EGE Robotic Surgery — home',
 'EGE Robotik Cərrahiyyə açılış animasiyası':'EGE Robotic Surgery opening animation',
 'EGE Robotik Cərrahiyyə Mərkəzi — robotik sistem və cərrah konsolunun illüstrasiyası':'EGE Robotic Surgery Centre — illustration of the robotic system and surgeon console',
 'Səhifə tapılmadı':'Page not found','Səhifə tapılmadı.':'Page not found.','Axtardığınız məlumatı ana səhifədən tapa bilərsiniz.':'You can find the information you are looking for on the homepage.','Ana səhifəyə qayıt':'Return to the homepage',
 'Məxfilik və istifadə':'Privacy and use','Məxfilik':'Privacy','və istifadə':'and use','Saytın məqsədi':'Purpose of the website','Xarici xidmətlər':'External services','Texniki məlumatlar':'Technical information','Əlaqə':'Contact',
 'Bu sayt robotik cərrahiyyə haqqında ümumi məlumat verir və EGE Hospitalın əlaqə kanallarına yönləndirir. Məzmun fərdi diaqnoz, müalicə tövsiyəsi və ya nəticə zəmanəti deyil.':'This website provides general information about robotic surgery and directs visitors to EGE Hospital’s contact channels. Its content is not an individual diagnosis, treatment recommendation or guarantee of results.',
 'WhatsApp keçidi xarici mesajlaşma xidmətini açır. Video açıldıqda YouTube-a, xəritə keçidində Google Maps-ə qoşulursunuz. Bu xidmətlərin öz məxfilik qaydaları tətbiq olunur.':'The WhatsApp link opens an external messaging service. Opening a video connects you to YouTube, and the map link connects you to Google Maps. These services’ own privacy policies apply.',
 'Saytda istifadəçi davranışını anlamaq üçün Microsoft Clarity istifadə olunur. Saytın özündə pasiyent məlumatlarını saxlayan forma yoxdur.':'Microsoft Clarity is used to understand user behaviour on the website. The website itself has no form that stores patient information.'
 };
 window.t=s=>window.siteLanguage==='en'?(dict[s]||s):s;
 function translate(s){if(window.siteLanguage!=='en')return s;const trimmed=s.trim();if(dict[trimmed])return s.replace(trimmed,dict[trimmed]);return s.replace(/EGE Robotik Cərrahiyyə Mərkəzi/g,'EGE Robotic Surgery Centre').replace(/EGE Robotik Cərrahiyyə/g,'EGE Robotic Surgery').replace(/robotik cərrahiyyə illüstrasiyası/g,'robotic surgery illustration').replace(/tezliklə/g,'coming soon')}
 function apply(){
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node;
  while(node=walker.nextNode()){if(node.parentElement.closest('script,style,textarea'))continue;const value=translate(node.nodeValue);if(value!==node.nodeValue)node.nodeValue=value;}
  document.querySelectorAll('[aria-label],[title],[alt],[placeholder]').forEach(el=>['aria-label','title','alt','placeholder'].forEach(attr=>{if(el.hasAttribute(attr)){const old=el.getAttribute(attr),value=translate(old);if(value!==old)el.setAttribute(attr,value)}}));
  const title=document.title.split(' | ').map(translate).join(' | ');if(title!==document.title)document.title=title;
  document.querySelectorAll('a[href]').forEach(a=>{
   const href=a.getAttribute('href');if(!href||href==='#'||a.hasAttribute('data-soon'))return;
   const u=new URL(href,location.href);if(u.origin!==location.origin)return;
   if(a.dataset.language){u.pathname=location.pathname;u.hash=location.hash;u.searchParams.set('lang',a.dataset.language);a.toggleAttribute('aria-current',false);if(a.dataset.language===window.siteLanguage)a.setAttribute('aria-current','true');}
   else {if(!u.pathname.startsWith(root.pathname))u.pathname=root.pathname+u.pathname.replace(/^\//,'');u.searchParams.set('lang',window.siteLanguage);}
   if(a.href!==u.href)a.href=u.href;
  });
 }
 document.addEventListener('DOMContentLoaded',()=>{
  if(window.siteLanguage==='en'&&location.pathname.replace(/index\.html$/,'')===root.pathname){document.title='EGE Robotic Surgery Centre';document.querySelector('meta[name="description"]').content='EGE Hospital Robotic Surgery Centre. Information about robotic surgery, its applications, doctors and consultations.'}
  apply();const observer=new MutationObserver(()=>{observer.disconnect();apply();observe()});
  function observe(){observer.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['aria-label','title','alt','placeholder']})}observe();
 });
})();
