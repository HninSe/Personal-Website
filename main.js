//readmoreBtn.addEventListener('click', Toggle('read-more));
const hireMeBtn = document.querySelector('.hire-me');
const Rtext = document.querySelector('.right-text');

hireMeBtn.addEventListener('click', (e) =>{
    Rtext.classList.toggle('hire-me');
    if(hireMeBtn.innerText === '採用する'){
        hireMeBtn.innerText = 'ありがとう';
    } else{
        hireMeBtn.innerText = '採用する';
    }
})

//hireMeBtn.addEventListener('click', Toggle('hire-me-now'));
const readmoreBtn = document.querySelector('.read-more');
const Ltext = document.querySelector('.left-text');

readmoreBtn.addEventListener('click', (e) =>{
    Ltext.classList.toggle('read-more');
    if(readmoreBtn.innerText === 'もっと見る'){
        readmoreBtn.innerText = '少く見る';
    } else{
        readmoreBtn.innerText = 'もっと見る';
    }
})

//language change 
        const langEl = document.querySelector('.langWrap');
        const link = document.querySelectorAll('a');

        const homeEl = document.querySelector('.home');
        const aboutEl = document.querySelector('.about');
        const skillEl = document.querySelector('.skill');
        const portfolioEl = document.querySelector('.portfolio');
        const portEl = document.querySelector('.port');
        const resumeEl = document.querySelector('.resume');
        const contactEl = document.querySelector('.contact');
        const introEl = document.querySelector('.intro');
        const heroEl = document.querySelector('.hero');
        const portBtnEl = document.querySelector('.btn-portfolio');
        const resumeBtnEl = document.querySelector('.btn-resume');
        const aboutMeTitleEl = document.querySelector('.aboutMeTitle');
        const textEl = document.querySelector('.text');
        const skillTitleEl = document.querySelector('.skillTitle');
        const languageEl = document.querySelector('.language');
        const verConEl = document.querySelector('.verCon');
        const DBEl = document.querySelector('.DB');
        const portTitleEl = document.querySelector('.portTitle');
        const view1El = document.querySelector('.view1');
        const view2El = document.querySelector('.view2');
        const resumeTitleEl = document.querySelector('.resumeTitle');
        const backgroundEl =document.querySelector('.background')
        const appealEl =document.querySelector('.appeal')
        const lefttextEl = document.querySelector('.left-text');
        const moreTextLEl = document.querySelector('.moreTextL');
        const readmoreEl = document.querySelector('.read-more');
        const righttextEl = document.querySelector('.right-text');
        const moreTextREl = document.querySelector('.moreTextR');
        const hireMeEl = document.querySelector('.hire-me');
        const contactTitleEl = document.querySelector('.contactTitle');
        const contactTEl = document.querySelector('.contactT');
        

        link.forEach(el => {
            el.addEventListener('click', () =>{
                langEl.querySelector('.active').classList.remove('active');
                el.classList.add('active');

                const attr = el.getAttribute('language');

                homeEl.textContent = data[attr].home;
                aboutEl.textContent = data[attr].about;
                skillEl.textContent = data[attr].skill;
                portfolioEl.textContent = data[attr].portfolio;
                portEl.textContent = data[attr].port;
                resumeEl.textContent = data[attr].resume;
                contactEl.textContent = data[attr].contact;
                introEl.textContent = data[attr].intro;
                heroEl.textContent = data[attr].hero;
                portBtnEl.textContent = data[attr].portBtn;
                resumeBtnEl.textContent = data[attr].resumeBtn;
                aboutMeTitleEl.textContent = data[attr].aboutMeTitle;
                textEl.textContent = data[attr].text;
                skillTitleEl.textContent = data[attr].skillTitle;
                languageEl.textContent = data[attr].language;
                verConEl.textContent = data[attr].verCon;
                DBEl.textContent = data[attr].DB;
                portTitleEl.textContent = data[attr].portTitle;
                view1El.textContent = data[attr].view1;
                view2El.textContent = data[attr].view2;
                resumeTitleEl.textContent = data[attr].resumeTitle;
                backgroundEl.textContent = data[attr].background;
                appealEl.textContent = data[attr].appeal;
                lefttextEl.textContent = data[attr].lefttext;
                moreTextLEl.textContent = data[attr].moreTextL;
                readmoreEl.textContent = data[attr].readmore;
                righttextEl.textContent = data[attr].righttext;
                moreTextREl.textContent = data[attr].moreTextR;
                hireMeEl.textContent = data[attr].hireMe;
                contactTitleEl.textContent = data[attr].contactTitle;
                contactTEl.textContent = data[attr].contactT;
            })
        })

        var data = 
        {
            "english":{
                "home": "HOME",
                "about": "ABOUT",
                "skill": "SKILLS",
                "portfolio": "PORTFOLIO",
                "port": "Portfolio",
                "resume": "Resume",
                "contact": "CONTACT",
                "intro": "Hi there! I'm Hnin Wutye Thaung",
                "hero": "TRYING TO BE A FRONTEND WEB DEVELOPER",
                "portBtn": "VIEW PORTFOLIO",
                "resumeBtn":　"VIEW RESUME",
                "aboutMeTitle": "about me",
                "text": "Hi there! I'm Hnin Wutye Thaung. After graduating from Yejin Agricultural University in Myanmar in 2017,I had acquired a technical VISA (Technology, Humanities, International Affairs) and came to Japan. I currently live in Okayama prefecture and works for the pesticide quality assurance team at Hokuko Chemical Industry. I've been self-taught HTML, CSS, and JavaScript to be a front-end web developer. In the future, I want to be a full-stack web developer. My goal in 2022 is to change jobs as a web developer. I would like you to see my portfolio to see if it fits the job position you are looking for. Thank you very much.",
                "skillTitle": "My Skills",
                "language": "Language",
                "verCon": "Version Control",
                "DB": "Database",
                "portTitle": "MY PORTFOLIO",
                "view1": "VIEW PORTFOLIO",
                "view2": "VIEW PORTFOLIO",
                "resumeTitle": "RESUME",
               "background":"Self-introduction",
                "appeal":"My Appeal",
                "lefttext": "My name is Hnin Wutye Thaung. I'm 25 years old and I'm from Myanmar. In 2017, I graduated from the Faculty of Horticulture and Agricultural Biotechnology, Ye-jin Agricultural University, Myanmar. I was hired by an Alps Agri Career and came to Japan. I studied Japanese in Myanmar for 9 months and continued to study it after that, and in 2021 I got the first grade of the Japanese language test. In Japan, I worked as an agricultural worker for more than 3 years and had good relationship with my colleagues. However, I realized that I didn't want to continue working as an agriculturalist, so I decided to change my career. I've been thinking about the career that suits me best. Of these, the one that caught my most interest was front-end development.",
                "moretextL": "",
                "readmore": "READ MORE",
                "righttext": "I self-taught HTML, CSS and JAVASCRIPT and created three portfolios as you see. I will continue to be motivated to learn the technologies necessary for the front-end development such as frameworks and UI / UX, aiming to be a good front-end web developer. I will spare no effort to become a full-stack web developer in the future. I will cooperate with colleagues in your company as I had with my japanese colleagues so far. Thank you very much for seeing my portfolioI would appreciate it if you could have the opportunity to work at your company.",
                "moretextR": "",
                "hireMe": "HIRE ME NOW",
                "contactTitle": "CONTACR ME",
                "contactT": "Get in touch with me, or follow me on:",

            },
            "japanese":{
                "home": "ホーム",
                "about": "私について",
                "skill": "スキル",
                "portfolio": "ポートフォリオ",
                "port": "ポートフォリオ",
                "resume": "履歴書",
                "contact": "問い合わせ",
                "intro": "ニンウィッイータウンです。",
                "hero": "フロントエンドエンジニアになるため頑張ってます。",
                "portBtn": "ポートフォリオを見る",
                "resumeBtn": "履歴書を見る",
                "aboutMeTitle": "私について",
               "text": "初めまして。 ニンウィッイータウンです。2017年にミャンマーのYezin農業大学を卒業して、技術VISA（技術・人文知識・国際業務）を取得し、日本に来ました。現在は岡山県に住み、北興化学工業で、農薬品質保証チームで働いています。私はフロントエンドのウェブ開発者になるために、独学でHTML、CSS、JavaScriptを学んで来ました。将来は、フルスタックのウェブ開発者になりたいと思っています。2022年の私の目標はウェブ開発者として転職することです。私が貴社が求める求人のポジションに合いますかどうか、私のポートフォリオをご覧いただきたく思います。どうぞよろしくお願いいたします。",
                "skillTitle": "スキル",
                "language": "プログラミング言語",
                "verCon": "バーション管理",
                "DB": "データベース",
                "portTitle": "ポートフォリオ",
                "view1": "ポートフォリオを見る",
                "view2": "ポートフォリオを見る",
                "resumeTitle": "履歴書",
                "background":"自己紹介",
                "appeal":"アピール",
                "lefttext": "ニンウィッイータウンと申します。 今は25歳で、ミャンマー出身です。2017年にミャンマーのイェジン農業大学の園芸及び農業バイオテクノロジー学部を卒業しました。 大学の求人でアルプスアグリキャリアに採用され日本へ来ました。日本語はミャンマーで9か月間学び、その後も学び続け、2021年に日本語検定1級を取得しました。日本では、農業従事者として3年以上働き、同僚の人々とも仲良くしていただきました。けれど、これからもずっと農業従事者として働き続けたくはないと気づき、キャリアを変えることに決め、自分に最も合うキャリアを考え続けてきました。その中で、最も私の興味を引いたのが、フロントエンド開発でした。",
                "moretextL":"",
                "readmore": "もっと見る",
                "righttext": "私はHTML、CSS、JAVASCRIPTを独学で勉強し、3つのポートフォリオを作成しました。 今後も意欲を持って、フレームワークやUI/UXなどの フロントエンド開発に必要な技術を学び、優れたフロントエンドウェブ開発者を目指します。将来的にはフルスタックのウェブ開発者になれるよう、努力を惜しみません。同僚の皆様とも今までお世話になった日本人の皆様と同様に、良好な関係を気づいていきます。ご覧頂き、ありがとうございます。貴社で働く機会をいただけましたら幸いです。",
                "moretextR": "",
                "hireMe": "採用する",
                "contactTitle": "問い合わせ",
                "contactT": "フォロー:",
            }
        }
        
    
