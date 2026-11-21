# ABDUL QALEEQ MOHAMMED — STUDENT PORTFOLIO

## Start here (Roman Urdu)

Yeh teacher ki required **5-section student portfolio** website hai. **Is mein dashboard, database, login ya admin panel nahi hai.** Original ZIP se Qaleeq ki portrait aur resume information preserve ki gayi hai. Purana React/TypeScript/Vite project `backup/Original_React_Source.zip` mein safe hai. Nayi website easy-to-upload static HTML, CSS aur JavaScript hai.

### 1 — Website kaise kholni hai

1. `Qaleeq_Student_Portfolio_Ready` folder extract karein.
2. Folder ke andar `index.html` par double-click karein. Chrome/Edge mein website khul jayegi.
3. Menu mein **About Me, Projects / Portfolio, Certifications, Tasks, Contact** exactly 5 sections hain.
4. Internet hosting ke liye poora extracted folder (jis mein `index.html` hai) Netlify Drop par upload kar sakti hain. Sirf `index.html` akela upload na karein.

### 2 — IBM SkillsBuild ke course files

Website par 11 course cards hain. Numbered files `files/certifications/` mein hain. `NN` course ka two-digit number hai.

| Courses | Certificate | Presentation | Video |
|---|---|---|---|
| 01–03 | `NN-certificate.pdf` | `NN-presentation.pptx` | `NN-recording.mp4` |
| 04–09 aur 11 | `NN-certificate.pdf` | `NN-presentation.pdf` | `NN-recording.mp4` |
| 10 · AI Fundamentals Learning Plan | Official certificate pending | `10-presentation.pdf` | `10-recording.mp4` |

Certificate PDFs source presentation ki certificate images se banaye gaye hain. Videos silent slideshow walkthroughs hain.

Course 10 ka completion screenshot uski presentation mein hai. IBM certificate milne par `10-certificate.pdf` isi folder mein rakhein aur `assets/content.js` mein Course 10 se `certificatePending:true` hata dein.

### 3 — LinkedIn aur GitHub links add karein

`assets/content.js` ko Notepad / VS Code se kholein. In lines mein **asli verified URLs** paste karein:

```js
linkedin: 'https://www.linkedin.com/in/YOUR-REAL-PROFILE',
github: 'https://github.com/YOUR-REAL-USERNAME',
```

Ye example URLs hain, **website mein abhi blank hain** kyunke original resume/source mein verified profile URLs nahi diye gaye. Same file mein `projectRepositories` ke liye teen actual GitHub project repo links daalein. `projectLiveLinks` mein local demos already configured hain; jab asli AI agents deploy ho jaayein, unke live URLs laga dein.

### 4 — Projects / Portfolio section

- **Actual resume-supported:** Quantitative Management System Optimization (MSc thesis, Riga Technical University).
- **Interactive example 1:** IT Incident Triage Assistant (`demos/incident-triage.html`).
- **Interactive example 2:** Operational Log Analyzer (`demos/log-analyzer.html`).
- **Interactive example 3:** Task Priority Helper (`demos/task-priority.html`).

**These three are simple rule-based educational demos, not finished AI agents or real AI model deployments.** Agar Qaleeq ke AI agent prototypes already bane hain, unke accurate descriptions aur deployed/GitHub links add karna required hai. Details change karne ke liye `assets/site.js` mein `const projects = [...]` edit karein.

### 5 — About Me + CV + intro

- `files/cv/Original_Resume.pdf`: exactly user-uploaded original resume.
- `files/cv/Abdul_Qaleeq_ATS_CV.pdf`: simple text-based ATS-style CV made from that uploaded resume. Personal details verify karein.
- `assets/portrait.jpg`: original site se picture.
- `assets/intro-profile.mp4`: short animated profile introduction based on provided resume. Voiceover nahi; presentation-style animation hai.
- Intro video replace karna ho to naya MP4 isi naam aur folder mein rakhein. `assets/intro-poster.jpg` optional poster hai.

### 6 — Tasks ke files

**30 September 2026:**
- CV as above, intro video as above.
- `files/tasks/30-09-2026-Project-Idea-SAMPLE.pptx`: editable **sample PowerPoint** with Idea Title, Background, Introduction, Objectives, Results, Basic Details. Idea is only a proposed example (AI-Assisted IT Incident Triage Agent); real project idea aur real presentation ke saath replace karein.
- `files/tasks/30-09-2026-Project-Idea-SAMPLE.pdf`: optional supporting sample PDF.

**7 October 2026:**
- `files/tasks/07-10-2026-Cover-Letter-DRAFT.pdf`: draft for a *potential* Accenture Riga IT Support opportunity. No verified job posting was provided; tailor this letter to the actual vacancy before submitting.
- `files/tasks/07-10-2026-Job-Posting-PLACEHOLDER.pdf`: must be replaced with an actual selected job advertisement (Accenture Riga or EPAM Latvia).
- Course 01 and Course 02 certificate, presentation and video buttons point to the matching course cards.

If replacing a task attachment in another file format, update that specific link in `index.html`.

### 7 — Contact form

The Contact section contains email, location, WhatsApp and a basic form. Form is **mailto-based**: form submit opens the visitor's email app with a prefilled message, and visitor must press Send. It **does not** send or store messages automatically, does not claim an inbox or server. For direct submissions without an email app, later configure a trusted form backend.

### 8 — Final teacher checklist

- [ ] Add the official certificate for Course 10, AI Fundamentals Learning Plan.
- [ ] Add Qaleeq's verified LinkedIn and GitHub links.
- [ ] Replace sample learning demos with original AI agent implementations and provide GitHub + live URLs.
- [ ] Check the ATS-style CV's details and upload a final updated CV if necessary.
- [ ] Replace the project idea PowerPoint with the actual coursework deck.
- [ ] Replace the job posting placeholder and finalize the tailored cover letter.
- [ ] Test every link from the **published live URL** before teacher submission.

### Structure

```text
Qaleeq_Student_Portfolio_Ready/
  index.html                    (double-click to open)
  assets/
    style.css                   (colors and layout)
    content.js                  (names, course titles, actual profile/repo links)
    site.js                     (cards, interactions, project descriptions)
    portrait.jpg
    intro-profile.mp4
    intro-poster.jpg
  files/
    cv/                         (ATS CV and original resume)
    certifications/             (11 courses, Course 10 certificate pending)
    tasks/                      (task PPT, drafts, placeholders)
  demos/                        (three interactive rule-based samples)
  backup/Original_React_Source.zip
  README_START_HERE.md
```

**This ZIP is a completed portfolio *layout and working demo package*, not a truthful claim that the missing academic evidence has been uploaded.**
