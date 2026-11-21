(() => {
  'use strict';
  const cfg = window.PORTFOLIO_CONFIG;
  const $ = (q, base=document) => base.querySelector(q);
  const safe = (v) => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const pad = n => String(n).padStart(2,'0');
  const validUrl = v => /^https:\/\/[^\s]+$/i.test(String(v||''));
  const external = (url, text, cls='') => `<a class="${cls}" href="${safe(url)}" target="_blank" rel="noopener noreferrer">${safe(text)} ↗</a>`;
  const missing = text => `<span class="missing-link" title="Edit assets/content.js to add the real URL">${safe(text)} · Add link</span>`;
  function toast(message) { const t=$('#toast'); t.textContent=message; t.classList.add('show'); clearTimeout(window.toastTime); window.toastTime=setTimeout(()=>t.classList.remove('show'),3200); }

  $('#social-linkedin').innerHTML = validUrl(cfg.linkedin) ? external(cfg.linkedin,'LinkedIn') : missing('LinkedIn');
  $('#social-github').innerHTML = validUrl(cfg.github) ? external(cfg.github,'GitHub') : missing('GitHub');
  $('#contact-socials').innerHTML = [validUrl(cfg.linkedin)?external(cfg.linkedin,'LinkedIn'):missing('LinkedIn'), validUrl(cfg.github)?external(cfg.github,'GitHub'):missing('GitHub')].join(' <span class="social-sep">/</span> ');

  const projects = [
    {key:'incident', number:'02', title:'IT Incident Triage Assistant', detail:'Type a support issue and see how a transparent, rule-based assistant can suggest a category and first troubleshooting step.', tags:['IT support','Rule-based demo','Interactive']},
    {key:'log', number:'03', title:'Operational Log Analyzer', detail:'Paste sample log lines and view counts of errors, warnings and normal records in an interactive local prototype.', tags:['Log analysis','Browser demo','Interactive']},
    {key:'priority', number:'04', title:'Task Priority Helper', detail:'Enter urgency and impact to receive an explainable priority recommendation and handling guidance.', tags:['Workflow','Decision rules','Interactive']},
  ];
  $('#prototype-cards').innerHTML=projects.map(p=>{
    const link=cfg.projectLiveLinks[p.key];
    const repo=cfg.projectRepositories[p.key];
    return `<article class="project-card reveal"><div class="card-top"><span class="card-icon">⌘</span><span class="project-index">${p.number} / 04</span></div><span class="type-label">INTERACTIVE LEARNING DEMO — NOT A COMPLETED AI AGENT</span><h3>${safe(p.title)}</h3><p>${safe(p.detail)}</p><div class="tag-row">${p.tags.map(t=>`<span>${safe(t)}</span>`).join('')}</div><div class="card-actions">${link ? external(link,'Open live demo','text-link') : missing('Live demo')}${validUrl(repo)?external(repo,'GitHub repository','text-link'):missing('GitHub repository')}</div></article>`
  }).join('');

  const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');reveal.unobserve(e.target);}}),{threshold:0.05,rootMargin:'0px 0px 45px 0px'});
  const certificateCards=$('#certificate-cards');
  const certifications=cfg.certifications.map((course,index)=>({
    ...course,
    number:index+1
  }));
  const complete=certifications.filter(({certificatePending})=>!certificatePending).length;
  $('#cert-progress').textContent=`${complete} of ${certifications.length} courses have all three files.`;

  function renderCert(query='') {
    const term=query.trim().toLowerCase();
    const matches=certifications.filter(({title,number,certificatePending})=>
      `Course ${pad(number)} ${title} ${certificatePending ? 'certificate pending' : ''}`.toLowerCase().includes(term));
    certificateCards.innerHTML=matches.map(({title,number,presentation='pdf',certificatePending})=>{
      const n=pad(number);
      const base=`files/certifications/${n}`;
      const certificate=certificatePending
        ? '<p>Official certificate pending. The presentation includes the course completion screenshot.</p>'
        : `<a href="${base}-certificate.pdf" target="_blank" rel="noopener"><span aria-hidden="true">▤</span> Certificate <small>PDF</small></a>`;
      const presentationAction=presentation==='pptx' ? 'download' : 'target="_blank" rel="noopener"';
      return `<article class="cert-card reveal" data-course="${number}" id="course-${number}">
        <div class="cert-top"><span class="cert-count" aria-hidden="true">${n}</span></div>
        <h3>${safe(title)}</h3>
        <div class="cert-links">
          ${certificate}
          <a href="${base}-presentation.${presentation}" ${presentationAction}><span aria-hidden="true">▣</span> Presentation <small>${presentation.toUpperCase()}</small></a>
          <a href="${base}-recording.mp4" target="_blank" rel="noopener"><span aria-hidden="true">▷</span> Slideshow video <small>MP4</small></a>
        </div>
      </article>`;
    }).join('');
    $('#cert-count').textContent=`Showing ${matches.length} of ${certifications.length} courses`;
    $('#cert-empty').hidden=Boolean(matches.length);
    applyReveals();
  }
  $('#cert-search').addEventListener('input',ev=>renderCert(ev.target.value));
  renderCert();
  document.querySelectorAll('[data-focus-cert]').forEach(el=>el.addEventListener('click',()=>{
    $('#cert-search').value='';renderCert(); const id=el.dataset.focusCert;
    setTimeout(()=>{$(`#course-${id}`)?.scrollIntoView({behavior:'smooth',block:'center'});$(`#course-${id}`)?.classList.add('targeted');setTimeout(()=>$(`#course-${id}`)?.classList.remove('targeted'),2000);},350);
  }));

  const menu=$('#main-menu'),button=$('.menu-toggle');
  button.addEventListener('click',()=>{const opened=menu.classList.toggle('open');button.setAttribute('aria-expanded',String(opened));});
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');button.setAttribute('aria-expanded','false');}));
  const navLinks=[...menu.querySelectorAll('a')];
  const observer=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting){const a=navLinks.find(a=>a.hash===`#${e.target.id}`);if(a){navLinks.forEach(n=>n.classList.toggle('active',n===a));}}}},{rootMargin:'-25% 0px -60% 0px',threshold:0});
  document.querySelectorAll('main section[id]').forEach(sec=>observer.observe(sec));
  function applyReveals(){document.querySelectorAll('.reveal:not([data-observed])').forEach(el=>{el.dataset.observed='1'; reveal.observe(el);});}
  applyReveals();

  $('#contact-form').addEventListener('submit',e=>{
    e.preventDefault();const fd=new FormData(e.currentTarget);
    const name=String(fd.get('name')).trim(),email=String(fd.get('email')).trim(),subject=String(fd.get('subject')).trim(),message=String(fd.get('message')).trim();
    if(!name || !/^\S+@\S+\.\S+$/.test(email) || !subject || message.length<5){toast('Please fill in all fields correctly.');return;}
    const body=`From: ${name}\nReply to: ${email}\n\n${message}`;
    window.location.href=`mailto:${cfg.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    $('#form-status').textContent='Your email app should open with the message. Please press Send there to deliver it.';
  });
})();
